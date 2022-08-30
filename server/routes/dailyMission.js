const express = require('express');
const passport = require('passport');
const { getMissions, deleteMission } = require('../controllers/dailyMission');
require("../passportJwt.js");

const router = express.Router();

router.get('/', getMissions);
router.delete('/:id', passport.authenticate("jwt", { session: false }), deleteMission);


module.exports = router;
