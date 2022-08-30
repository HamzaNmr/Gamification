const mongoose = require('mongoose');
const BadgesModel = require('../models/BadgesModel');

const getBadges = async (req, res) => {
    try{
        const badges = await BadgesModel.find();
        res.status(200).json(badges);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};


module.exports = { getBadges };