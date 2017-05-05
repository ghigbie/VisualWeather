const express = require("express"),
          ejs = require("ejs"),
          app = express();

const port = process.env.PORT || 3020;

app.set("view engine", "ejs");

app.get("*", (req, res) => {
    res.render("notfound");
});

app.listen(port, process.env.IP, () => {
    console.log(`Server is up on port ${port}`);
});
