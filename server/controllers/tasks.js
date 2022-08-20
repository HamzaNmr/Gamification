const mongoose = require('mongoose');
const TaskModel = require('../models/TaskModel');

const getTasks = async (req, res) => {
    try{
        const tasks = await TaskModel.find().sort({ _id: -1 });
        res.status(200).json(tasks);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};

const getTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await TaskModel.findById(id);

        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

module.exports = { getTasks, getTask };