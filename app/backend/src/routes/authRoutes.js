const express = require("express");

const router = express.Router();

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

module.exports = router;