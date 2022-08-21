const express = require('express');
const passport = require('passport');
const { getTasks, getTask, completeTask } = require('../controllers/tasks.js');
require("../passportJwt.js");

const router = express.Router();

router.get('/',passport.authenticate("jwt", { session: false }), getTasks);
router.get('/:id', passport.authenticate("jwt", { session: false }), getTask);
router.patch('/:id/completeTask', passport.authenticate("jwt", { session: false }), completeTask);


module.exports = router;