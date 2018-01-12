var express = require('express');
const publicweb = process.env.PUBLICWEB || '.';
var methodOverride = require('method-override');
const bodyParser= require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080; 
var app = express();
var db = require('./db');
var user = require('./user');



	
app.use(express.static('./public')); 
// Add headers
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request



//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

console.log('current dir __dirnmae:'+__dirname);
app.post('/api/userProfile', user.createUserProfile);
app.get('/api/userProfile', user.searchResults);
app.delete('/api/userProfile/:id', user.deleteUserProfile);



app.listen(port, function () {
  console.log('Example app listening on localhost:'+port);
});
