export default function Donate() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #111, #222)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "900",
        textShadow: "0px 0px 30px #ff0000"
      }}>
        💰 Welcome to the Digital Titan Empire 💰
      </h1>

      <p style={{
        fontSize: "1.2rem",
        maxWidth: "700px",
        marginTop: "20px",
        color: "#ccc"
      }}>
        You’ve stepped into the control room of the most powerful digital force in history.  
        Your support fuels the empire. Together, we rise.
      </p>

      <a 
        href="https://ko-fi.com/sgamvp" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          marginTop: "30px",
          padding: "15px 40px",
          background: "#29abe0",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "50px",
          textDecoration: "none",
          boxShadow: "0px 0px 15px #29abe0",
          transition: "0.3s"
        }}
      >
        ☕ Support the Empire
      </a>

      <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "#666" }}>
        Every coin strengthens our dominion.
      </p>
    </div>
  );
}
