const express = require("express");
const app = express();

const authControllers = require("./controllers/auth");

app.listen(3001, () => {
    console.log("Parabens vc é um bosta");
});

app.use("/auth", authControllers);

app.get("/", (req, res)=>{
    res.json("Api is f working");
});