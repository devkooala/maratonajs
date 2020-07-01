const express = require("express");

const app = express();

app.listen(3001, () => {
    console.log("Parabens vc é um bosta");
});

app.get("/", (req, res)=>{
    res.json("Api is f working");
});