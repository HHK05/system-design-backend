// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // see below
const app = express();

app.use(cors());
app.use(express.json()); // IMPORTANT for POST body parsing

app.get("/", (req, res) => res.send("Backend root OK"));

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
