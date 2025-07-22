import express from "express";
import { askGeminiDoctor } from "../Services/Ai_DoctorServices.js";
import { sanitizeInput, sanitizeOutput } from "../utils/sanitize.js";
import Chat from "../Models/ChatModel.js";
import Limiter from "../utils/limiter.js";


const router = express.Router();
// i will apply a rate limiter to prevent the api from being called too often
router.post("/ask-doctor",   async (req, res) => {
  const rawMessage = req.body.message;

  if (!rawMessage || rawMessage.trim() === "") {
    return res.status(400).json({ error: "Message is required" });
  }

  const message = sanitizeInput(rawMessage);
  try {
    const reply = await askGeminiDoctor(message);
    const cleanReply = sanitizeOutput(reply);

    //  Save only general medical queries (not appointment messages)
    const isAppointmentQuery = /appointment|available|timing|book|consultation|kab milenge|kobe/i.test(message);
    if (!isAppointmentQuery) {
      await Chat.create({ message ,  repliedByAi: cleanReply });
    }

   return  res.json({ reply: cleanReply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;






