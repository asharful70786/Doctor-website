import { sanitizeInput, sanitizeOutput } from "../utils/sanitize.js";
import { askGeminiDoctor } from "../Services/Ai_DoctorServices.js";

router.post("/ask-doctor", async (req, res) => {
  const rawMessage = req.body.message;
  if (!rawMessage || rawMessage.trim() === "") {
    return res.status(400).json({ error: "Message is required" });
  }
  const message = sanitizeInput(rawMessage);
  try {
    const aiResponse = await askGeminiDoctor(message);
    const reply = sanitizeOutput(aiResponse);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


