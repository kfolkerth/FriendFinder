//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//sets the app's port to listen to request on to either an environment defined port or a default of 8080
var PORT = process.env.PORT || 8080;

//configures express to use desired data parsing
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//points to route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//listener function
app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT);
});