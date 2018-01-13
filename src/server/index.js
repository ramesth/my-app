var express = require('express');
const publicweb = process.env.PUBLICWEB || '.';
var methodOverride = require('method-override');
const bodyParser= require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080; 
var app = express();
var db = require('./db');
var user = require('./user');
const routes = require('./routes');
const path = require('path');
const fs = require('fs');
var staticRoot = __dirname + '/';
const root = './';
app.use(express.static(path.join(root, 'public')));
app.use('/api', routes);

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

app.use(express.static('.')); 

app.use(function(req, res, next){
  
      // if the request is not html then move along
      var accept = req.accepts('html', 'json', 'xml');
      if(accept !== 'html'){
          return next();
      }
  
      // if the request has a '.' assume that it's for a file, move along
      var ext = path.extname(req.path);
      if (ext !== ''){
          return next();
      }
  
      fs.createReadStream(staticRoot + 'index.html').pipe(res);
  
  });

//app.get('*', function (req, res) {
//  res.sendFile('public/index.html', {root});
//});

console.log('current dir __dirnmae:'+__dirname);
//app.post('/api/userProfile', user.createUserProfile);
//app.get('/api/userProfile', user.searchResults);
//app.delete('/api/userProfile/:id', user.deleteUserProfile);



app.listen(port, function () {
  console.log('Example app listening on localhost:'+port);
});
