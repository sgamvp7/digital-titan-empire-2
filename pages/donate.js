export default function Donate() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, background: "#121212", color: "#eee", minHeight: "100vh", textAlign: "center" }}>
      <h1>Support the Digital Titan Empire</h1>
      <p>Thank you for helping feed the beast and grow the empire!</p>
      <a href="https://ko-fi.com/sgamvp" target="_blank" rel="noopener noreferrer" style={{
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
      }}>Donate on Ko-fi</a>
    </div>
  );
}
