# DrWeb – AI-Powered Doctor Assistant (24/7)

![DrWeb Banner](https://doctorweb.ashraful.in/image.png) <!-- Replace with your actual banner image -->

## 🌟 Highlight Feature: AI Doctor Available 24/7

**DrWeb offers a 24/7 AI-powered medical assistant**, built using Google Gemini API to instantly answer health-related questions anytime. With future flexibility to adopt Grok or other AI models, this ensures a smart and scalable experience.

---

## 🔗 Live Demo

**Website:** [https://doctorweb.ashraful.in/](https://doctorweb.ashraful.in/)

---

## 📌 Overview

DrWeb is a full-stack AI-driven doctor assistant platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It enables patients to:

* Chat with an AI doctor 24/7
* Book appointments with real doctors
* Receive email confirmations
* Sync with Google Calendar automatically

Doctors can:

* View booked appointments on their dashboard
* Get calendar sync via Google Calendar API

This is a fully production-ready project ideal for clinics, hospitals, or solo practitioners who want to provide instant digital medical assistance.

---

## 🧠 Core Features

### 🤖 AI Chat Assistant (24/7)

* Powered by Google Gemini API (key rotation built-in)
* Smart responses to health-related questions
* Future-ready for Grok or any other AI API

### 📅 Appointment Scheduling

* Patients can book appointments at any time
* Real-time doctor dashboard
* Google Calendar sync using Google Calendar API


### 📧 Email Notification System

* Sends appointment confirmations and alerts using NodeMailer
* Configurable sender/receiver via environment variables

### 🎨 Frontend UI

* Built with React.js + Vite
* Styled with Tailwind CSS and shadcn/ui components
* Mobile-friendly and responsive layout

---

## 🧰 Tech Stack

| Tech                    | Usage              |
| ----------------------- | ------------------ |
| **MongoDB**             | Database           |
| **Express.js**          | Backend API        |
| **React**               | Frontend Interface |
| **Node.js**             | Server Runtime     |
| **Tailwind CSS**        | Styling            |
| **shadcn/ui**           | UI Components      |
| **Google Gemini API**   | AI Chat Responses  |
| **Google Calendar API** | Appointment Sync   |
| **NodeMailer**          | Email Service      |

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/asharful70786/Doctor-website.git
cd Doctor-website
```

### 2. Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URL=your_mongo_db_uri

NODE_MAILER_EMAIL=your_email@gmail.com
NODE_MAILER_PASSWORD=your_email_password
NODE_MAILER_RECEIVER=receiver_email@gmail.com

GEMINI_KEY_1=your_gemini_key_1
GEMINI_KEY_2=your_gemini_key_2
GEMINI_KEY_3=your_gemini_key_3
```

> 💡 Gemini keys are rotated automatically in code to avoid quota limits.

### 3. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 4. Run the Project

```bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 📽️ Demo Video & Screenshots

### 🎥 Video Demo

[![Watch the Demo](https://img.youtube.com/vi/your_video_id/maxresdefault.jpg)](https://www.youtube.com/watch?v=your_video_id) <!-- Replace with actual link -->

### 🖼️ Screenshots

* ![AI Chat](./screenshots/ai-chat.png)
* ![Book Appointment](./screenshots/book-appointment.png)
* ![Doctor Dashboard](./screenshots/doctor-dashboard.png)

---

## 💡 Future Improvements

* Add video consultation via WebRTC
* Admin dashboard for superusers
* Push notifications (web/mobile)
* HIPAA/GDPR compliance support

---

## 📁 Project Folder Structure

The DrWeb project is cleanly divided into two main parts: **frontend** and **backend**.

```
Doctor-website/
├── backend/
│   ├── controllers/	         # Route handlers (AI chat, auth, appointments)
│   ├── models/	             # MongoDB models (User, Appointment, etc.)
│   ├── routes/	             # API routes (chat, user, appointment)
│   ├── utils/	             # Utility functions (AI integration, email, Google Calendar)
│   ├── middlewares/	     # Auth middleware, error handlers
│   ├── config/	             # DB connection, third-party config
│   ├── .env	                 # Environment variables (not pushed to GitHub)
│   ├── index.js	           # Main server file
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/	     # Reusable UI components (buttons, cards, chat UI)
│   │   ├── pages/	         # Page-level components (Home, Login, Chat, Book)
│   │   ├── routes/	         # React Router definitions
│   │   ├── hooks/	         # Custom hooks (auth, API)
│   │   ├── context/	       # Global app state (auth, chat)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env	                 # Frontend environment vars (e.g. VITE_API_URL)
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

> 🔐 `.env` files are required in both `frontend` and `backend` directories.




## 🧑‍💻 Contributing

Pull requests are welcome. Please fork the repo and submit a PR with meaningful changes. For major changes, open an issue first.

---


## 📬 Contact

**Author:** Ashraful Momin
**Email:** [ashrafulmomin7076@gmail.com](mailto:ashrafulmomin7076@gmail.com)
**Web:** [ashrafulmomin](https://www.ashraful.in/)

> 🚀 Feel free to star ⭐ this repo if you like the project!
