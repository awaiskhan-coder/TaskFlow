# 📋 Task Manager App

A modern Full Stack Task Manager built with the MERN Stack. This application allows users to register, log in, manage daily tasks, track progress, and organize work efficiently.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 🔒 Protected Dashboard
- ➕ Add New Tasks
- ✏️ Edit Existing Tasks
- 🗑️ Delete Tasks
- ✅ Mark Tasks as Completed
- 📅 Due Date Support
- 🚩 Priority Levels (High, Medium, Low)
- 🔍 Search Tasks
- 📂 Filter Tasks (All, Pending, Completed)
- 📊 Dashboard Statistics
- 🔔 Toast Notifications
- ⚡ Loading States
- 🎨 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Icons
- React Toastify
- SweetAlert2

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

---

## 📁 Project Structure

```
Task-Manager/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/awaiskhan-coder/TaskFlow.git
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📸 Main Modules

- Authentication
- Dashboard
- Task Management
- Search
- Filter
- Statistics
- Profile

---

## 📈 Dashboard Features

- Total Tasks
- Pending Tasks
- Completed Tasks
- Task Table
- Priority Badges
- Due Date
- Search & Filter

---

## 📌 Future Improvements

- User Profile Management
- Dark Mode
- Task Categories
- Drag & Drop Tasks
- Email Notifications
- Team Collaboration

---

## 👨‍💻 Author

**Awais Ahmad Khan**

BS Information Technology

MERN Stack Developer

---

## 📄 License

This project is created for educational and portfolio purposes.
