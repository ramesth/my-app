var mongoose = require('mongoose');  
var Person = new mongoose.Schema({
	name: String
});
var PersonProfile = new mongoose.Schema({
  name: String,
  age:Number,
  email:String
});

var database = require('./dbconfig'); 
mongoose.model('Person', Person);  
mongoose.model('PersonProfile', PersonProfile);  

var  db=mongoose.connect(process.env.MONGO_URL|| database.localUrl); 
//var  db=mongoose.connect(database.remoteUrl|| database.localUrl); 
db.connection.on('error', console.error.bind(console, 'connection error:'));

  console.log('we are connected');


