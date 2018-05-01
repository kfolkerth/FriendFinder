
//points to stored profile information
var profileData = require("../data/friends");

//Routes
module.exports = function(app) {
    //defines routes for API requests

    //sends profile objects stored in profileData as json
    app.get('/app/profiles', function(req, res) {
        res.json(profileData);
    });

    //handles submission of new profile to profileData
    app.post('/app/profiles', function(req, res) {
        profileData.push(req.body);
        res.json(true);
    });
}