const express = require("express")
const response = require("./middlewares/response");
const db = require("./models");

const app = express();
const authControllers = require("./controllers/auth");

app.use(response);
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(3001, () => {
    console.log("Parabens vc é um bosta");
});

app.use("/auth", authControllers);


db.sequelize.sync().then(()=> {
    app.get("/", (req, res)=>{
        res.json("Api is f working");
    });
});