const express = require("express"),
        axios = require("axios"), //make http request with node and supports promises
        yargs = require("yargs"), //helps to build interactive command line commands 
          ejs = require("ejs"),
          app = express();

const port = process.env.PORT || 3020;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("*", (req, res) => {
    res.render("notfound");
});

app.listen(port, process.env.IP, () => {
    console.log(`Server is up on port ${port}`);
});
