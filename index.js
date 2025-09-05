const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Example API route
app.get("/questions", (req, res) => {
  res.json([{ id: 1, title: "Design a URL Shortener", difficulty: "Easy" }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
