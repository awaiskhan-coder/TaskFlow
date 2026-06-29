const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router();

const { registerUser, loginUser, getProfile } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;