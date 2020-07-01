const express = require("express");
const db = require("./models");

const app = express();
const authControllers = require("./controllers/auth");

app.listen(3001, () => {
    console.log("Parabens vc é um bosta");
});

app.use("/auth", authControllers);

db.sequelize.sync().then(()=> {
    app.get("/", (req, res)=>{
        res.json("Api is f working");
    });
});