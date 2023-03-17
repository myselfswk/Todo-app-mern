const Task = require('../models/task');

// Add Tasks Controller
const addTasks = async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);

    } catch (error) {
        res.send(error.message);
    }
}

// Show All Task Controller
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Update Tasks by ID controller
const updateTasks = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        )
        res.status(200).send(task);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Delete Tasks by ID Controller
const deleteTasks = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).send(task);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    addTasks,
    getAllTasks,
    updateTasks,
    deleteTasks
}