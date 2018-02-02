const express = require('express');
var user = require('./user');
const router = express.Router();




router.route('/userProfile')
    .post(user.createUserProfile)
    .get(user.searchResults);


 router.delete('/userProfile/:id', user.deleteUserProfile); 
 router.get('/heroes', (req, res) => {
    res.send(200, [
       {"id": 10, "name": "Starlord", "saying": "oh yeah"}
    ])
   });
module.exports=router;




