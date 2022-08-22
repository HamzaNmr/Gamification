const express = require('express');
const passport = require('passport');
const { getGroups, getGroup, commentGroup } = require('../controllers/community.js');
require("../passportJwt.js");

const router = express.Router();

router.get('/', getGroups);
router.get('/:id', getGroup);
router.post('/:id/commentGroup', passport.authenticate("jwt", { session: false }), commentGroup);



module.exports = router;