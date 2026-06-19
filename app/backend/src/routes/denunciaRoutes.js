const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.use(auth);
const controller =
require("../controllers/denunciaController");

router.post(
  "/",
  controller.create
);

router.post(
  "/",
  auth,
  controller.create
);

router.get(
  "/",
  controller.list
);

router.get(
  "/:id",
  controller.getById
);

router.put(
  "/:id",
  controller.update
);

router.delete(
  "/:id",
  controller.delete
);


module.exports = router;