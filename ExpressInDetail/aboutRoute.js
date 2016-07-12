module.exports = function (app) {
    aboutCtrl = require("./aboutCtrl");
    //should render about page.
    app.get("/about", aboutCtrl.about)
};
