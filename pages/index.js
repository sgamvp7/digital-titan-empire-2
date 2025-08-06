/import React, { useEffect, useState } from "react";

const YOUTUBE_API_KEY = "AIzaSyANXwPAuoX6FolkFs7SglWPAz6pA2XpbPI"; // Your YouTube API key

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stealth Auto-Promotion & Growth System (runs silently)
  useEffect(() => {
    // Auto-refresh feed every 5 minutes
    const interval = setInterval(() => {
      fetchTrendingVideos();
      stealthAutoPromote();
    }, 300000);
    fetchTrendingVideos();
    return () => clearInterval(interval);
  }, []);

  async function fetchTrendingVideos() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=10&regionCode=US&key=${YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching trending videos:", err);
    } finally {
      setLoading(false);
    }
  }

  // Invisible auto-promotion (no visible UI, runs behind the scenes)
  function stealthAutoPromote() {
    // Example: silently repost links on free platforms, inject donation prompts, etc.
    // (You can expand this with serverless functions or APIs as you grow)
    console.log("Stealth auto-promotion active...");
  }

  // Friendly donation call-to-action component (subtle and clean)
  const DonationPrompt = () => (
    <div style={{marginTop: 20, padding: 12, backgroundColor: "#f5f5f5", borderRadius: 8, textAlign: "center"}}>
      <p>
        Love what you see? Support the community by <a href="https://ko-fi.com/sgamvp" target="_blank" rel="noreferrer" style={{color:"#0070f3", textDecoration:"underline"}}>buying me a coffee ☕️</a> or <a href="https://www.paypal.com/paypalme/sgamvp7" target="_blank" rel="noreferrer" style={{color:"#0070f3", textDecoration:"underline"}}>donating via PayPal</a>.  
      </p>
    </div>
  );

  return (
    <div style={{maxWidth: 960, margin: "auto", padding: 20, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
      <h1 style={{textAlign: "center", color: "#222"}}>Digital Titan Empire</h1>
      <p style={{textAlign: "center", color: "#555"}}>
        Your source for trending viral videos, growing automatically with stealth AI power.
      </p>

      {loading && <p style={{textAlign: "center"}}>Loading trending videos...</p>}

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 20}}>
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 10,
              color: "#000",
              textDecoration: "none",
              backgroundColor: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={{width: "100%", borderRadius: 6}}
            />
            <h3 style={{marginTop: 10, fontSize: "1rem", fontWeight: "600"}}>{video.snippet.title}</h3>
            <p style={{fontSize: "0.875rem", color: "#666", marginTop: 6}}>
              {video.statistics.viewCount ? `${parseInt(video.statistics.viewCount).toLocaleString()} views` : "Views unavailable"}
            </p>
          </a>
        ))}
      </div>

      <DonationPrompt />
    </div>
  );
}
