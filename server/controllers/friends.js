// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned

// First add the following two line at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend'); // now we have access to var Friend

module.exports = (function() {
    return {
        // notice how index in the factory (client side) is calling the index method (server side)
        index: function(req, res) {
            // call to db, retrienve data, check for errors, http response with json
            Friend.find({}, function(err, results) {
                if(err){
                    console.log(err);
                }else {
                    res.json(results);
                }
            });
        },
        addFriend: function(req, res){
            var friend = new Friend(req.body);

            friend.save(function(err) {
                if(err){
                    console.log(err);
                }else {
                    res.json({});
                }
            });
        },
        deleteFriend: function(req, res) {
            Friend.remove({_id: req.params.id}, function(err) {
                if(err){
                    console.log(err);
                }else {
                    res.json({});
                }
            });
        }
    }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports)
