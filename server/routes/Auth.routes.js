const express = require("express");
const Users = require("../Data/Users");
const { uuid } = require("uuid");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { RegisterUser, LoginUser } = require("../controllers/Auth");

const JWT_SECRET = "thisisaSecretMustBeStoredinA.ENVFIle";

router.post("/signup", RegisterUser);
router.post("/login", LoginUser);

module.exports = router;
