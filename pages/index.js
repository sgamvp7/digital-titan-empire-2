export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        🏴‍☠️ Welcome to the Digital Titan Empire 🏴‍☠️
      </h1>
      <p style={{ maxWidth: "600px", marginBottom: "30px", fontSize: "1.2rem" }}>
        This is the most powerful viral machine on the internet.  
        Enter and watch the empire grow while you sleep.
      </p>

      {/* Main Button */}
      <a href="/donate" style={{
        marginTop: "10px",
        padding: "15px 40px",
        background: "#ff0000",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0px 0px 10px #ff0000",
        transition: "0.3s",
      }}>
        💰 Support the Empire
      </a>

      {/* Viral Feed Button */}
      <a href="/feed" style={{
        marginTop: "20px",
        padding: "15px 40px",
        background: "#444",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0px 0px 10px #444",
        transition: "0.3s",
      }}>
        📡 Explore Viral Feed
      </a>
    </div>
  );
}
