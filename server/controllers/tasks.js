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
};

const completeTask = async (req, res) => {
    const { id } = req.params;

    if(!req.user._id) return json({message: "unauthenticated"});

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("This task is not exist");

    const task = await TaskModel.findById(id);

    const index = task.complete.findIndex((id) => id === String(req.user._id));
    if(index === -1){
        task.complete.push(req.user._id);
    }else{
        task.complete = task.complete.filter((id) => id !== String(req.user._id));
    }
    const updatedTask = await TaskModel.findByIdAndUpdate(id, task, { new: true });

    res.json(updatedTask);
};

module.exports = { getTasks, getTask, completeTask };