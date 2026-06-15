const express = require("express");
const cors = require("cors");

const authRoutes =
require("./routes/authRoutes");

const denunciaRoutes =
require("./routes/denunciaRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/denuncias", denunciaRoutes);

module.exports = app;