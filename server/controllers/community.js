const mongoose = require('mongoose');
const CommunityModel = require('../models/CommunityModel');

const getGroups = async (req, res) => {
    try{
        const groups = await CommunityModel.find().sort({ _id: -1 });
        res.status(200).json(groups);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};

const getGroup = async (req, res) => {
    const { id } = req.params;

    try {
        const group = await CommunityModel.findById(id);

    res.status(200).json(group);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

const commentGroup = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const group = await CommunityModel.findById(id);

    group.comments.push(value);

    const updatedGroup = await CommunityModel.findByIdAndUpdate(id, group, { new: true });

    res.json(updatedGroup);
};


module.exports = { getGroups, getGroup, commentGroup };