const express = require("express");
const {
  register,
  signin,
  signout,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);

router.post("/signin", signin);

router.get("/signout", signout);

router.post("/forgotPassword", forgotPassword);

router.post("/resetPassword", resetPassword);

module.exports = router;
