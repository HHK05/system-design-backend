// routes/auth.js
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Missing fields" });
  // for local test, just echo back
  return res.json({ message: "OK (test)", user: { username, email } });
});

router.post("/login", (req, res) => {
  return res.json({ message: "Login test OK" });
});

module.exports = router;
