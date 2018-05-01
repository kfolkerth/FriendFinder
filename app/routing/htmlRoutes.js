//Dependencies
var path = require("path");

//Routing
module.exports = function(app) {

    //Sends home.html on GET request directly to home path
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //Sends survey HTML when directed to survey path
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Catch all route that directs user to home HTML
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}