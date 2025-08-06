export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #000000, #1a1a1a)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      overflow: "hidden",
    }}>
      <h1 style={{
        fontSize: "4rem",
        fontWeight: "900",
        textShadow: "0px 0px 30px #ff0000"
      }}>
        🔥 Digital Titan Empire 🔥
      </h1>
      <p style={{
        fontSize: "1.5rem",
        maxWidth: "800px",
        margin: "20px auto",
        color: "#ccc"
      }}>
        The most powerful website in history.  
        Fueled by AI. Driven by ambition.  
        Forged in the depths of the digital underworld.
      </p>

      <a href="/donate" style={{
        padding: "15px 40px",
        background: "#ff0000",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0px 0px 15px #ff0000",
        transition: "0.3s",
      }}>
        💰 Enter the Empire
      </a>

      <a href="https://ko-fi.com/sgamvp" target="_blank" rel="noopener noreferrer" style={{
        marginTop: "20px",
        padding: "10px 30px",
        background: "#29abe0",
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0px 0px 10px #29abe0",
        transition: "0.3s",
      }}>
        ☕ Support on Ko‑fi
      </a>
    </div>
  );
}
