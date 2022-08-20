const express = require('express');
const passport = require('passport');
const { getTasks, getTask } = require('../controllers/tasks.js');
require("../passportJwt.js");

const router = express.Router();

router.get('/', getTasks);
router.get('/:id', getTask);


module.exports = router;