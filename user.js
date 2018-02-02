require('mongoose').model('Person');
require('mongoose').model('PersonProfile');

var mongoose = require('mongoose');
var User = mongoose.model('Person');
var UserProfile=mongoose.model('PersonProfile');

module.exports = {
  createUsers: function (req, res) {
    var person = req.body;
    console.log(person);
    new User({ name: person.name })
      .save(function (err) {
        if (err) {
          console.log('error: user not saved');
          res.status(504);
          res.end(err);
          return "NOTOK";
        } else {
          console.log('user saved:  '+person.name);
          res.end();
          return "oK";
        }
      });
  },
  createUserProfile: function (req, res) {
    var personProfile = req.body;
    console.log(personProfile);
    new UserProfile({ name: personProfile.name,age:personProfile.age,email:personProfile.email })
      .save(function (err) {
        if (err) {
          console.log('error: user not saved');
          res.status(504);
          res.end(err);
          return "NOTOK";
        } else {
          console.log('user saved:  '+personProfile.name +''+ personProfile.age+' '+personProfile.email);
          res.end();
          return "oK";
        }
      });
  },
  delete: function( req, res, next) {
    console.log(req.params.id);
    console.log('we are in delete');
    User.findById({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);            
      } else {
        res.end();
      }
    });
  },
  deleteUserProfile: function( req, res, next) {
    console.log(req.params.id);
    console.log('we are in delete');
    UserProfile.findById({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);            
      } else {
        res.end();
      }
    });
  },
  seeResults: function (req, res, next) {
    User.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
         console.log('user:', docs[i].name);
        }
        res.end(JSON.stringify(docs));
      }
    });
  }
  , 
  searchResults: function (req, res, next) {
    UserProfile.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
         console.log('user:', docs[i].name,docs[i].age,docs[i].email);
        }
        res.end(JSON.stringify(docs));
      }
    });
  }
}