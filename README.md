# 🤖 Interview.AI

An AI-powered mock interview platform that helps users prepare for job interviews through personalized AI-generated questions, voice-based answers, and instant performance feedback.

## 🚀 Features

- 🔐 Google Authentication (Firebase)
- 📄 Resume Upload & AI Resume Parsing
- 🎯 AI-Generated Interview Questions
- 🎙️ Voice-to-Text Answering
- 🤖 AI Evaluation & Feedback
- ⏱️ Timed Interview Sessions
- 📊 Performance Dashboard
- 📥 PDF Report Generation
- 🕓 Interview History
- 💳 Credit-Based System with Razorpay

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Motion library
- Redux Toolkit
- React Router
- Axios
- Firebase Authentication


### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- PDF.js

### AI & Services
- OpenRouter API (GPT-4o-mini)
- Razorpay
- Web Speech API

---

## 📂 Project Structure

```
interview-ai/
│
├── frontend/                         # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/                 # Images and static files
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Step1Setup.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   ├── Step3Report.jsx
│   │   │   └── Timer.jsx
│   │   ├── pages/                  # Route-level pages
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── redux/                  # State management
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/
│   │   │   └── firebase.js         # Firebase config
│   │   ├── App.jsx                 # Routes + app entry
│   │   └── main.jsx
│   ├── index.html
│   ├── .env                        # Environment variables (not committed)
│   ├── package.json
│   └── vite.config.js
│
├── backend/                         # Node.js backend
│   ├── config/
│   │   ├── connectDB.js            # MongoDB connection
│   │   └── token.js                # JWT generation
│   ├── controllers/
│   │   ├── auth_controller.js
│   │   ├── user_controller.js
│   │   ├── interview_controller.js
│   │   └── payment_controller.js
│   ├── middlewares/
│   │   ├── isAuth.js               # JWT auth middleware
│   │   └── multer.js               # File upload config
│   ├── models/
│   │   ├── user_model.js
│   │   ├── interview_model.js
│   │   └── payment_model.js
│   ├── routes/
│   │   ├── auth_route.js
│   │   ├── user_route.js
│   │   ├── interview_route.js
│   │   └── payment_route.js
│   ├── services/
│   │   ├── openRouter_service.js   # OpenRouter AI wrapper
│   │   └── razorpay_service.js     # Razorpay SDK init
│   │
│   ├── index.js                    # Main server entry
│   ├── .env                        # Environment variables (not committed)
│   └── package.json                  
│   
├── .gitignore                         
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/basav-ch/interview-ai.git
cd interview-ai
```

Install dependencies:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

```env
PORT=
MONGODB_URL=
JWT_SECRET=
OPENROUTER_API_KEY=
RAZORPAY_API_KEY_ID=
RAZORPAY_KEY_SECRET=
```

### Frontend (`frotnend/.env`)

```env
VITE_RAZORPAY_KEY_ID=
VITE_FIREBASE_APIKEY=
```

---

## ▶️ Run the Project

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

---

## 📡 Main API Routes

```
/api/auth
/api/user
/api/interview
/api/payment
```

---

⭐ If you found this project useful, consider giving it a star on GitHub!