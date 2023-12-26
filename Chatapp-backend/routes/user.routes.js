const express = require("express");
const { getUser, deleteUser } = require("../controllers/user.controller");
const { isAuth } = require("../utils/authentication");
const { isAdmin } = require("../utils/authorisation");

const router = express.Router();

router.get("/user", isAuth, getUser);
router.delete("/user/:userId", isAuth, isAdmin, deleteUser);

module.exports = router;
