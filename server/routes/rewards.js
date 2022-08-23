const router =require('express').Router();

const { getRewards} = require('./../controllers/rewards')


router.get('/' , getRewards)


module.exports = router;