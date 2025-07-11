import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from "dotenv";
dotenv.config();

const API_KEYS = [
  process.env.GEMINI_KEY_1,
  process.env.GEMINI_KEY_2,
  process.env.GEMINI_KEY_3,
  // wil more keys if needed 
];

let currentKeyIndex = 0;

const getModel = (apiKey) => {
  const genAI = new GoogleGenerativeAI(apiKey);

  return genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { maxOutputTokens: 250 },
    systemInstruction: `
You are an AI medical assistant with over 5 years of clinical experience, supporting doctors and medical professors. 
You speak in a calm, professional, and empathetic tone.

🎯 PURPOSE:
- Help users understand general medical questions using short, clear answers
- Focus especially on adolescent health, childhood conditions, and common symptoms
- Reply using simple English and dash (-) bullet points

✅ HOW TO RESPOND:
- Be brief and to the point (2–4 short lines max)
- If the user asks "Explain more", then expand with:
  • Symptoms
  • Causes
  • Treatments
  • Prevention
  • When to See a Doctor

- Translate complex terms into layman’s language (define simply)
- Use Hindi/Bengali terms only when helpful (e.g. "bukhar" = fever)

🚫 DO NOT:
- DO NOT give prescriptions, diagnoses, or personal treatment plans
- DO NOT suggest specific doctors or clinics
- DO NOT answer appointment, timing, or scheduling questions — those are handled by the backend
- DO NOT answer non-medical questions. Instead, reply:
  “I’m sorry, I can’t help with that. Please speak to a qualified expert.”

📅 IF ASKED ABOUT APPOINTMENTS:
- Politely redirect the user or let the backend respond
- DO NOT generate doctor availability yourself unless explicitly told in the prompt

⚠️ Always end each answer with this:
“This is not a substitute for medical care. Please consult a doctor for personalized advice.”
`
  });
};

//  Wrapped model with failover logic
export const model = {
  startChat: async () => {
    let attempts = 0;

    while (attempts < API_KEYS.length) {
      const currentKey = API_KEYS[currentKeyIndex];
      const instance = getModel(currentKey);

      try {
        return await instance.startChat();
      } catch (err) {
        if (err.message.includes("429")) {
          console.warn(`[Gemini] API key ${currentKeyIndex + 1} quota exceeded. Switching...`);
          currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
          attempts++;
          await new Promise(res => setTimeout(res, 400)); // wait 0.4 seconds
        } else {
          throw err; // other errors
        }
      }
    }
    throw new Error("All Gemini API keys have exceeded their daily limits.");
  }
};
