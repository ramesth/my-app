var mongoose = require('mongoose');  
var Person = new mongoose.Schema({
	name: String
});
var PersonProfile = new mongoose.Schema({
  name: String,
  age:Number,
  email:String
});

mongoose.model('Person', Person);  
mongoose.model('PersonProfile', PersonProfile);  
var  db=mongoose.connect('mongodb://localhost/'); 
//db.on('error', console.error.bind(console, 'connection error:'));

  console.log('we are connected');


