
const express = require('express');
var user = require('./user');
const router = express.Router();




router.route('/user')
    .post(user.createUser)
    .get(user.displayResults);


 router.delete('/user/:id', user.deleteUser); 
 router.get('/heroes', (req, res) => {
    res.send(200, [
       {"id": 10, "name": "Starlord", "saying": "oh yeah"}
    ])
   });
module.exports=router;




