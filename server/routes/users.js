const express = require('express');
const passport = require('passport');
const { signup, signin } = require('../controllers/user.js');
require("../passportJwt.js");

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);

router.get('/protected', passport.authenticate("jwt", { session: false }), (req, res) => {
    return res.status(200).send({
        success: true,
        user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name,
            email :user.email,
            userName: user.userName,
            bio: user.bio,
            level: user.level,
            experience: user.experience,
            coins: user.coins,
            rewards: user.rewards,
            badges: user.badges,
        }
    })
});

module.exports = router;