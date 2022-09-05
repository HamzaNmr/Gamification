const express = require('express');
const passport = require('passport');
const { getRewards } = require('../controllers/rewards.js');
require("../passportJwt.js");

const router = express.Router();

router.get('/', getRewards);


module.exports = router;
