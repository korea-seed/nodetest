"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
//router.post("/login", ctrl.process.login);



// routes/home/index.js와  server.js 을 연결시켜주기 위해
module.exports = router;