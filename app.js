var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.redirect("/home");
});

// DUTCH ROUTES
app.get("/home", function (req, res) {
    res.render("dutch/home");
});

app.get("/over-ons", function (req, res) {
    res.render("dutch/over-ons");
});

app.get("/vakwerk", function (req, res) {
    res.render("dutch/vakwerk");
});

app.get("/contact", function (req, res) {
    res.render("dutch/contact");
});

// ENGLISH ROUTES
app.get("/home-en", function (req, res) {
    res.render("english/home");
});

app.get("/about-us-en", function (req, res) {
    res.render("english/over-ons");
});

app.get("/craftmanship-en", function (req, res) {
    res.render("english/vakwerk");
});

app.get("/contact-en", function (req, res) {
    res.render("english/contact");
});


// CATCH 404 ERROR
app.use(function (req, res, next) {
    res.status(404).render("error");
});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("SERVER RUNNING", process.env.PORT);
});