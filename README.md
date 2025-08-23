# 💬 ChatApp

A real-time group chat application built with Spring Boot, WebSockets, MongoDB, and React.
It allows users to create/join chat rooms, send/receive messages instantly, and fetch past conversations from MongoDB.

---

## 🚀 Tech Stack

**Backend:** Spring Boot, WebSocket, MongoDB
**Frontend:** React, TailwindCSS

---

## 🎯 Objectives

- Create and join chat rooms with unique IDs
- Real-time messaging across all participants
- Store and retrieve messages from MongoDB
- Simple and responsive chat UI

---

 ## 🔗 API Endpoints
 
**Room Management**
- `POST /room/create` → Create a new room
- `GET /room/join` → Join an existing room

**Messaging**
- `POST /room/{roomId}/messages` → Send a message (save to MongoDB and broadcast)
- `GET /room/{roomId}/messages `→ Fetch all messages for a room

**WebSocket**
- `Endpoint: /chat` → Handles real-time join + messaging inside rooms

---

 ## 📌 Project Status

✅ Repository initialized & code pushed.
🚧 Project development in progress.

---

## ✍️ Authors

Shreya Midya
Nitesh Kumar
