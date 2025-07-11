import express from "express";
import SubscribedMail from "../Services/SubScribeMail.js";
import { sendMailService } from "../Services/ContactMailServices.js";



const router = express.Router();

router.post("/sendMail", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, email, and phone number"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }

    await sendMailService(name, email, phone, subject, message);

    res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully. The doctor will contact you soon."
    });

  } catch (error) {
    console.error("Error sending patient inquiry email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send your inquiry. Please try again later or contact us directly."
    });
  }
});



router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address" });
    }
    await SubscribedMail(email);
    res.status(200).json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Error subscribing:", error);
    res.status(500).json({ success: false, message: "Failed to subscribe" });
  }
});

export default router;
