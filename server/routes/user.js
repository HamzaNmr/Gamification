const express = require('express');
const passport = require('passport');
const { updateProfile, getUsers  } = require('../controllers/user.js');
const {createMission, getMissions } = require('../controllers/dailyMission');
require("../passportJwt.js");

const router = express.Router();

router.get('/', getUsers);
router.patch('/:id', passport.authenticate("jwt", { session: false }), updateProfile);
router.post('/', passport.authenticate("jwt", { session: false }), createMission);



module.exports = router;
