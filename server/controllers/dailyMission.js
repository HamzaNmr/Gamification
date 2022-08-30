const mongoose = require('mongoose');
const DailyMissionModel = require('../models/DailyMissionModel.js');
require("../passportJwt.js");


const getMissions = async (req, res) => {
    try{
        const missions = await DailyMissionModel.find();

        res.status(200).json(missions);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};

const createMission = async (req, res) => {
    const mission = req.body;

    const newMission = new DailyMissionModel ({ ...mission, creator: req.user._id, createAt: new Date().toISOString() });
    
    try{
        await newMission.save();

        res.status(201).json(newMission);
    } catch (error){
        res.status(409).json({ message: error.message })
    }
};

const deleteMission = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("This mission is not exist");

    await DailyMissionModel.findByIdAndRemove(id);

    res.json({ message: 'Mission deleted successfuly'});
};

module.exports = { createMission, getMissions, deleteMission };