const express = require('express')
const router = express.Router()
const {getAllUsers} = require('../controllers/usercontrollers')

router.get('/',getAllUsers);
module.exports = router;