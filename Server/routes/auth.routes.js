const express = require("express");
const router = express.Router();
const {
    register,
    login,
    logout,
    profile,
} = require("../controllers/auth.controller.js");
const { authMiddleware } = require("../middleware/auth.middleware.js");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/profile", authMiddleware, profile);

module.exports = router;
