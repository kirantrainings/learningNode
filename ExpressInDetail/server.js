var port = 3000;

var express = require("express");
var app = express("app");

//set the view engines

app.set("views", "./views");
app.set("view engine", "ejs");

require('./aboutRoute')(app);
require("./router")(app);

app.listen(port);
console.log("app listening at port" + port);
