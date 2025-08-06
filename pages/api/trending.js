export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY || "AIzaSyANXwPAuoX6FolkFs7SglWPAz6pA2XpbPI";
  const regionCode = "US";

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&maxResults=8&key=${apiKey}`
    );

    const data = await response.json();
    res.status(200).json(data.items || []);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch trending content" });
  }
}
