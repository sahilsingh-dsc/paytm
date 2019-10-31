const express = require('express');
const bodyParser = require('body-parser');
const engine = require('consolidate');
const cors = require('cors');

const app = express();

app.engine("ejs",engine.ejs);
app.set("Views","./views");
app.set("view engine","ejs");

app.use(cors());
app.use(express.static("public"));

app.use("/api",bodyParser.urlencoded({extended:true}),bodyParser.json(),require("./route-groups"));

app.get("/",(req,res)=>{
    res.send({message:" Jai Shree Ram.........It is working"})

})

module.exports = app;
