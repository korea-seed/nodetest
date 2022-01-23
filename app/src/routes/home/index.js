"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);



// routes/home/index.js와  server.js 을 연결시켜주기 위해
module.exports = router;