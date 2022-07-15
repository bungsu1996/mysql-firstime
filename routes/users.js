var express = require('express');
const UserController = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/daftar', UserController.registerUser);


module.exports = router;
