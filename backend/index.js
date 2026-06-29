const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("TaskFlow Backend Running...");
});

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
    
  console.log(`Server running on http://localhost:${PORT}`);
});