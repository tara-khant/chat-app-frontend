
# React Chat App (Frontend)

This is a basic React (Vite + JSX) setup for a chat application with user authentication, chat creation, and WebSocket support.

## 📦 Installation

```bash
npm install
```

## 🚀 Run the Project

```bash
npm run dev
```

The app will start on:

👉 http://localhost:5173

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=backend-service-url
VITE_SOCKET_URL=socket-url
```

## ✨ Features

- User authentication (signup/login)  
- Create and manage chats  
- Real-time messaging with WebSocket (Socket.IO)  
- AI chat integration (via backend OpenAI API)   
- Chat history loaded from backend API  
- Supports multiple users and chat rooms  
