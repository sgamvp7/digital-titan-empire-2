export default function handler(req, res) {
  res.status(200).json({ message: "Ko-fi donations are handled directly on Ko-fi. No server processing needed." });
}
