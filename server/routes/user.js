const express = require('express');
const passport = require('passport');
const { updateProfile, getUsers  } = require('../controllers/user.js');
require("../passportJwt.js");

const router = express.Router();

router.get('/',passport.authenticate("jwt", { session: false }), getUsers);
router.patch('/:id', passport.authenticate("jwt", { session: false }), updateProfile);

module.exports = router;
