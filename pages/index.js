import { useEffect, useState } from "react";
import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyANXwPAuoX6FolkFs7SglWPAz6pA2XpbPI";
const KO_FI_LINK = "https://ko-fi.com/sgamvp";

export default function Home() {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=US&key=${YOUTUBE_API_KEY}`
      );
      setTrendingVideos(res.data.items);
    } catch (error) {
      console.error("Error fetching trending videos:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, background: "#121212", color: "#eee", minHeight: "100vh" }}>
      <header style={{ marginBottom: 30 }}>
        <h1 style={{ fontSize: "3rem", textAlign: "center" }}>🔥 Digital Titan Empire 🔥</h1>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          The beast that feeds itself — powered by AI, YouTube trends, and your support.
        </p>
      </header>

      <section>
        <h2>🔥 Trending YouTube Videos</h2>
        {loading && <p>Loading trending videos...</p>}
        {!loading && trendingVideos.length === 0 && <p>No trending videos found.</p>}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
          {trendingVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "23%", textDecoration: "none", color: "#eee", background: "#222", padding: 10, borderRadius: 8 }}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: "100%", borderRadius: 5 }}
              />
              <h3 style={{ fontSize: "1rem", marginTop: 10 }}>{video.snippet.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 40, textAlign: "center" }}>
        <h2>Feed the Beast</h2>
        <p>If you like what you see, consider supporting us on Ko-fi.</p>
        <a
          href={KO_FI_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#ff5e57",
            color: "white",
            padding: "15px 40px",
            borderRadius: 30,
            fontWeight: "bold",
            fontSize: "1.2rem",
            textDecoration: "none",
            boxShadow: "0 0 15px #ff5e57",
            display: "inline-block",
            marginTop: 15,
          }}
        >
          Support on Ko-fi
        </a>
      </section>
    </div>
  );
}
