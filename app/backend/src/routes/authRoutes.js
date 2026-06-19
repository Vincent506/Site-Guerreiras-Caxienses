const express = require("express");

const router = express.Router();
console.log("AUTH ROUTES CARREGADO");
const authController =
require("../controllers/authController");

router.get("/teste", (req, res) => {
  res.json({
    rota: "auth funcionando"
  });
});

router.post(
  "/register",
  authController.register
);

router.post(
  "/login",
  authController.login
);

module.exports = router;