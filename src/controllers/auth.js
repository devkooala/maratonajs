const express = require("express");
const bcrypt = require("bcrypt");

const {Account} = require("../models");
const {accountSignUp} = require("../validators/account");
const {getMessage} = require("../helpers/validator");

const router = express.Router();
const rounds = 10;

router.get("/sign-in", (req, res) => {
    res.jsonOk();
});

router.get("/sign-up", accountSignUp, async (req, res) => {

    const {email, password} = req.body;

    const account = await Account.findOne({where: {email}});

    if (account) {
        return res.jsonBadRequest(null, null, getMessage("account.signup.email_taken"));  
    }

    const hash = await bcrypt.hash(password, rounds);
    const result = await Account.create({email, password: hash});
    
    console.log({email, hash});
    return res.jsonOk(result, null, getMessage("account.signup.success"));  
});

module.exports = router;