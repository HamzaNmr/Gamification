const express = require('express');
const passport = require('passport');
const { getBadges } = require('../controllers/badges.js');
require("../passportJwt.js");

const router = express.Router();

router.get('/', getBadges);

module.exports = router;