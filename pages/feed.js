export default function Feed() {
  // Fake viral content (replace with your real content engine later)
  const posts = [
    {
      title: "🚀 How the Empire Will Rule the Internet",
      description: "A glimpse into the viral future...",
      url: "https://youtu.be/dQw4w9WgXcQ",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "🔥 5 Secrets the Internet Doesn’t Want You to Know",
      description: "Number 3 will shock you...",
      url: "https://youtu.be/dQw4w9WgXcQ",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "💰 How to Make Money While You Sleep",
      description: "The Digital Titan way.",
      url: "https://youtu.be/dQw4w9WgXcQ",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
  ];

  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", textAlign: "center" }}>
        📡 Viral Feed
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "1.2rem" }}>
        The Empire’s latest viral discoveries — updated daily.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
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
              src={post.thumbnail}
              alt={post.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h2 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{post.title}</h2>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>{post.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
