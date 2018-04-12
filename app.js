var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.redirect("/home");
});

app.get("/home", function (req, res) {
    res.render("home");
});

app.get("/over-ons", function (req, res) {
    res.render("over-ons");
});

app.get("/vakwerk", function (req, res) {
    res.render("vakwerk");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.use(function (req, res, next) {
    res.status(404).render("error");
});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("SERVER RUNNING", process.env.PORT);
});