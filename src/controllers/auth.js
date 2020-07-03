const express = require("express");
const bcrypt = require("bcrypt");

const {Account} = require("../models");
const router = express.Router();

const rounds = 10;

router.get("/sign-in", (req, res) => {
    res.send("Whatsapp your fucker");
});

router.get("/sign-up", async (req, res) => {
    const email = "gui@gmail.com";
    const password = "123";

    const hash = await bcrypt.hash(password, rounds);
    const result = await Account.create({email, password: hash});
    res.json(result);  
});

module.exports = router;