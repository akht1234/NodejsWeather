const { error } = require("console");
const express = require("express");
const app= express();
const hbs = require("hbs");
const path = require("path");
const port = 5000;

const staticPath = path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partials_path)
app.use(express.static(staticPath));

app.get("",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("error",{
        errorMsg: "404 Page not Found"
    })
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});