module.exports = function (app) {
    console.log("route initialized")
        //processing?
        /*
   var ctrl = require("./controller")
   var checkUserExists = function (req, res) {
     console.log("route called");
     res.send("Welcome")
 };*/
    var ctrl = require("./controller")

    //routing??
    app.get("/", ctrl.checkUserExists);
};
