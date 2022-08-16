const express = require('express');
const passport = require('passport');
const { updateProfile } = require('../controllers/user.js');
require("../passportJwt.js");

const router = express.Router();

router.patch('/', updateProfile);

module.exports = router;
