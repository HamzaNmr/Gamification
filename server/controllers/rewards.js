const mongoose = require('mongoose');
const RewardModel = require('../models/RewardModel');

const getRewards = async (req, res) => {
    try {
        const rewards = await RewardModel.find().sort({ _id: -1 });
        res.status(200).json(rewards);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


module.exports = { getRewards };