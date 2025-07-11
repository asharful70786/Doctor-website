import { model } from "../config/doctorAssistant.js";

export const askGeminiDoctor = async (userMessage) => {
  const messageLower = userMessage.toLowerCase();

  // Multi-language appointment keyword check
  const appointmentKeywords = [
    "appointment", "available", "availability", "when can i come", "timing",
    "book", "fix", "reserve", "visit doctor", "see doctor", "clinic open",
    "doctor available", "kab milenge", "milna hai", "doctor kab milenge",
    "docror kobe", "doctor kobe asben", "book koro ", "appointment chai" , "consultation", "kobe"
  ];

  const isAppointmentQuery = appointmentKeywords.some(keyword =>
    messageLower.includes(keyword)
  );

  // Log intent for debugging/analytics
  const intent = isAppointmentQuery ? "appointment_query" : "general_health_query";
  console.log(`[AI-DOCTOR] Detected Intent: ${intent} | Message: ${userMessage}`);

  // Short-circuit appointment answers (no Gemini API call)
  if (isAppointmentQuery) {
    return `
- Dr. Amit Roy is available Monday to Wednesday and Friday to Saturday.  
- Morning: 8:00 AM – 11:00 AM  
- Evening: 4:00 PM – 7:00 PM  
- Not available on Thursdays and Sundays.  
- For bookings, please contact the clinic directly.

This is not a substitute for medical care. Please consult a doctor for personalized advice.
    `.trim();
  }

  // Call Gemini only for medical queries
  const chat = model.startChat();
  const result = await chat.sendMessage(userMessage);
  const response = await result.response;
  return response.text();
};
