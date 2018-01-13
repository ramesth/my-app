const express = require('express');
var user = require('./user');
const router = express.Router();

router.get('/heroes', (req, res) => {
 res.send(200, [
    {"id": 10, "name": "Starlord", "saying": "oh yeah"}
 ])
});



router.post('/userProfile', user.createUserProfile);
router.get('/userProfile', user.searchResults);
router.delete('/userProfile/:id', user.deleteUserProfile);

module.exports=router;
