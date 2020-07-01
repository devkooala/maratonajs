const express = require("express");

const router = express.Router();

router.get("/sign-in", (req, res) => {
    res.send("OK signed in");
});

router.get("/sign-up", (req, res) => {
    res.send("OK signed up");
});

module.exports = router;