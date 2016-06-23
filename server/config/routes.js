// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)

// First, at the top of your routes.js file you'll have to require the controllers
var friends = require('./../controllers/friends.js');

module.exports = function(app) {
    // verb: get, plural of targe as the URI is the RESTful index method (it returns all friends)
    app.get('/friends', function(req, res) {
        // res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}])
        // delegate to the controller and pass along the req and res
        // CALL BACKEND CONTROLLER METHOD
        friends.index(req, res);
    });

    app.post('/friends', function(req, res) {
        friends.addFriend(req, res);
    });
    app.delete('/delete/:id', function(req, res) {
        friends.deleteFriend(req, res);
    });
};
