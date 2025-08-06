// /pages/feed.js
import { useState, useEffect } from "react";

// Your real YouTube API key hardcoded for simplicity
const API_KEY = "AIzaSyANXwPAuoX6FolkFs7SglWPAz6pA2XpbPI";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trending videos from YouTube API
  useEffect(() => {
    async function fetchTrendingVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&chart=mostPopular&regionCode=US&type=video&key=${API_KEY}`
        );
        const data = await res.json();

        if (data.items) {
          setVideos(data.items);
        }
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingVideos();

    // 🩸 Self-promotion loop — quietly promotes your empire in the background
    const autopromo = setInterval(() => {
      console.log("🔥 The Beast is spreading your empire silently...");
      // Future: share to social APIs, cross-post, SEO pings
    }, 30000);

    return () => clearInterval(autopromo);
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🔥 The Beast’s Viral Feed 🔥</h1>
      <p style={styles.subtitle}>
        Live trending videos feeding the empire. Watch. Share. Dominate.
      </p>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading Beast Feed...</p>
      ) : (
        <div style={styles.grid}>
          {videos.map((video) => (
            <div key={video.id.videoId} style={styles.card}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  style={styles.thumbnail}
                />
                <h3 style={styles.videoTitle}>{video.snippet.title}</h3>
                <p style={styles.channelName}>{video.snippet.channelTitle}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Inline styles for luxury evil look
const styles = {
  page: {
    padding: "20px",
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#ff4d4d",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    border: "1px solid #222",
  },
  thumbnail: {
    width: "100%",
    display: "block",
  },
  videoTitle: {
    fontSize: "1rem",
    padding: "10px",
    color: "#fff",
  },
  channelName: {
    fontSize: "0.85rem",
    padding: "0 10px 10px",
    color: "#aaa",
  },
};
