const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
console.log("APP CARREGADO");
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "online"
  });
});

app.get("/ping", (req, res) => {
  res.json({
    pong: true
  });
});

module.exports = app;