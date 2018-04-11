var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.redirect("/home");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("SERVER RUNNING", process.env.PORT);
});