var _ = require('lodash');


var User = require('../models/user');

module.exports = function(app){
  app.get('/users', function(req, res){
    res.json(User.all());
  });

  app.get('/users/:id', function(req, res){
    var userId = parseInt(req.params.id, 10);

    // var selectedUser = _.find(users, function(user){
    //   return user.id === userId;
    // });

    res.json(User.get(userId) || {});
  });
};
