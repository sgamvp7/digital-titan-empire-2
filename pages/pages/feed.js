import { useEffect, useState } from "react";

export default function Feed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/trending")
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(() => setVideos([]));
  }, []);

  return (
    <div style={{
      background: "#111",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "900",
        marginBottom: "30px",
        textShadow: "0px 0px 20px #ff0000"
      }}>
        📡 Viral Feed
      </h1>

      {videos.length > 0 ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {videos.map(video => (
            <div key={video.id} style={{
              background: "#222",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #000"
            }}>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                <img 
                  src={video.snippet.thumbnails.medium.url} 
                  alt={video.snippet.title} 
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </a>
              <h3 style={{ fontSize: "1rem", marginTop: "10px", color: "#fff" }}>
                {video.snippet.title}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#888" }}>Loading viral content...</p>
      )}
    </div>
  );
}
