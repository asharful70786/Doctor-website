import express from "express";
import { askGeminiDoctor } from "../Services/Ai_DoctorServices.js";


const router = express.Router();

router.post("/ask-doctor", async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const reply = await askGeminiDoctor(message);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
