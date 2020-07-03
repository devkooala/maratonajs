const express = require("express");
const bcrypt = require("bcrypt");

const {Account} = require("../models");
const router = express.Router();

const rounds = 10;

router.get("/sign-in", (req, res) => {
    res.send("Whatsapp your fucker");
});

router.get("/sign-up", async (req, res) => {

    const {email, password} = req.body;

    const account = await Account.findOne({where: {email}});

    if (account) {
        return res.jsonBadRequest(null, null, "Email is already in use!");  
    }

    const hash = await bcrypt.hash(password, rounds);
    const result = await Account.create({email, password: hash});
    
    console.log({email, hash});
    return res.jsonOk(result, "bilau chuped");  
});

module.exports = router;