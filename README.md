# Brayn AI

This is a full-stack AI SaaS project built using MERN stack.
# 🧠 Brayn AI - Full Stack SaaS Platform

Brayn AI is a full-stack SaaS platform that combines powerful AI capabilities with a beautiful frontend and robust backend. It includes multiple AI tools, image manipulation, content generation, authentication, payment integration, and more.

---

## 🚀 Features

### 🧠 AI Tools
- ✨ **Article Generator** using Gemini API
- 🎨 **Background Remover** using ClipDrop API
- 📝 **Markdown Blog Editor** with live preview
- 📷 **Image Upload & Hosting** via Cloudinary
- 📥 **File Downloads** and API integrations

### 🔐 Authentication
- 🔑 Email/password login system
- 📧 Email verification with SMTP
- 👤 User sessions and JWT-based auth

### 💳 Payments
- 💰 Razorpay integration for subscription/payment
- 📄 Payment history tracking

### 📚 Content Management
- 📄 Create and view blog articles in markdown
- 🏷️ Article filtering by type
- 📈 Show usage stats or dashboard items

### 🌐 Deployment-Ready
- ⚙️ Backend built in Express.js
- 🖼️ Frontend in React with Tailwind CSS
- 🌍 CORS, .env, and secure API handling

---

## 🧪 Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Axios
- React Markdown

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- Nodemailer

**APIs Used:**
- Gemini AI API
- ClipDrop API
- Cloudinary API
- Razorpay Payment Gateway
- SMTP (Gmail)

---

## 🛠️ Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/BraynAi.git
cd BraynAi

## Tech Stack

- React.js (Frontend)
- Node.js + Express (Backend)
- MongoDB (Database)

## How to Run
cd client
npm install 
npm run dev

### Backend
```bash
cd server
npm install
npm run dev


## 🔐 Environment Variables

To run this project, create a `.env` file in the root of your `server/` folder and add the following:

```env
DB_URL=<your-mongo-db-url>
PORT=5000

SMTP_USER=<your-gmail-address>
SMTP_PASS=<your-smtp-password>

JWT_SECRET=<your-jwt-secret>

CLIPDROP_API_KEY=<your-clipdrop-key>

CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-key>
CLOUDINARY_API_SECRET=<your-cloudinary-secret>

GEMINI_API_KEY=<your-gemini-api-key>

RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>

also make .env file in client folder and add
VITE_RAZORPAY_KEY_ID = <your-rzorpay-key-id>
VITE_BASE_URL = http://localhost:5000
