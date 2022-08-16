const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
require('../passportJwt');
const { hashSync, compareSync } = require('bcrypt');



 const signup = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    
    try {
        const existingUser = await UserModel.findOne({ email });
        console.log({email});
        if(existingUser) return res.status(400).json({ message: 'user is already exist'});

    // if(password !== confirmPassword) return res.status(400).json({ message: 'password dont match'});

    const result = await UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        name: `${firstName} ${lastName}`,
        email: req.body.email,
        password: hashSync(req.body.password, 14)
    })

    const payload = {
        email :result.email,
        id: result._id,
    }

    console.log(payload);

    const token = jwt.sign(payload, "secretOrPrivateKey", {expiresIn: "1d"}); 

    res.status(200).json({result: result, token: token});

    } catch (error) {
        console.log(error);
    }

    
};

 const signin = (req, res) => {
    UserModel.findOne({ email: req.body.email }).then(user => {
        if(!user){
            return res.status(404).send({
                success: false,
                message: "cant find this user",
            })
        }


        if(!compareSync(req.body.password, user.password)){
            return res.status(401).send({
                success: false,
                message: "incorrect password",
            })
        }

        const payload = {
            id: user._id,
            name: user.name,
            email :user.email,
            userName: user.userName,
            bio: user.bio,
            level: user.level,
            experience: user.experience,
            coins: user.coins,
            imageUrl: user.imageUrl,
            rewards: user.rewards,
            badges: user.badges,
        }

        console.log(payload);

        const token = jwt.sign(payload, "secretOrPrivateKey", {expiresIn: "1d"});

        return res.status(200).send({
            success: true,
            message: "loged in successfuly",
            result: {
                id: user._id,
                name: user.name,
                email :user.email,
                userName: user.userName,
                bio: user.bio,
                level: user.level,
                experience: user.experience,
                coins: user.coins,
                imageUrl: user.imageUrl,
                rewards: user.rewards,
                badges: user.badges,
            },
            token: "Bearer " + token,
        })
    })

};


// const rewardUser = async (req, res) => {
//     const { id } = req.params;
//     const { value } = req.body;

//     const post = await PostModel.findById(id);

//     post.comments.push(value);

//     const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });

//     res.json(updatedPost);
// };

module.exports = { signup, signin };