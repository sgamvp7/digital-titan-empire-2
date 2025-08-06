import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Set in Vercel settings
const MAX_RESULTS = 12;

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch trending videos from YouTube
  async function fetchTrending(loadMore = false) {
    try {
      setLoading(true);
      const url = new URL("https://www.googleapis.com/youtube/v3/videos");
      url.searchParams.append("part", "snippet,statistics");
      url.searchParams.append("chart", "mostPopular");
      url.searchParams.append("regionCode", "US"); // Change to target region
      url.searchParams.append("maxResults", MAX_RESULTS);
      url.searchParams.append("key", YOUTUBE_API_KEY);
      if (loadMore && pageToken) {
        url.searchParams.append("pageToken", pageToken);
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setVideos((prev) =>
        loadMore ? [...prev, ...data.items] : data.items
      );
      setPageToken(data.nextPageToken || "");
    } catch (err) {
      console.error("Feed error:", err);
      setError("⚠️ Failed to load feed.");
    } finally {
      setLoading(false);
    }
  }

  // Track every visit for analytics
  function trackVisit(videoId) {
    console.log(`Tracking visit for video: ${videoId}`);
    // Could send this to a backend for logging
  }

  // Hidden autopromotion: ping SEO crawlers/social preview bots
  useEffect(() => {
    const beacon = document.createElement("img");
    beacon.src = `${window.location.origin}/?promo=1&cacheBust=${Date.now()}`;
    beacon.style.display = "none";
    document.body.appendChild(beacon);
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "20px",
        textAlign: "center"
      }}>
        📡 Viral Feed
      </h1>
      <p style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "1.2rem"
      }}>
        The Empire’s latest viral discoveries — updated in real-time.
      </p>

      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackVisit(video.id)}
            style={{
              backgroundColor: "#111",
              borderRadius: "10px",
              overflow: "hidden",
              textDecoration: "none",
              color: "#fff",
              boxShadow: "0 0 10px rgba(255,0,0,0.5)",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h2 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                {video.snippet.title}
              </h2>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                {video.snippet.description.slice(0, 100)}...
              </p>
            </div>
          </a>
        ))}
      </div>

      {pageToken && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => fetchTrending(true)}
            disabled={loading}
            style={{
              backgroundColor: "#e50914",
              color: "#fff",
              border: "none",
              padding: "15px 30px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
