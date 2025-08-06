// /pages/index.js
import Feed from "./feed";

export default function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>👑 Welcome to the Digital Titan Empire 👑</h1>
      <p style={styles.subtitle}>
        The Beast is alive. Watch it devour the internet in real time.
      </p>

      {/* The Beast Feed runs instantly */}
      <Feed />

      {/* Donation box for empire fuel */}
      <div style={styles.donation}>
        <h2>💰 Fuel the Beast</h2>
        <p>Your tribute keeps the empire growing stronger.</p>
        <a
          href="https://ko-fi.com/sgamvp"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.donateButton}
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
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
  donation: {
    marginTop: "50px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111",
    borderRadius: "12px",
  },
  donateButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    marginTop: "10px",
    fontWeight: "bold",
  },
};
