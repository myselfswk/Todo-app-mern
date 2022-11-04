const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// Create New Task
router.post('/', async (req, res) => {
    try {
        console.log("req.body");
        console.log(req.body);
        const task = await new Task(req.body).save();
        res.send(task);
        console.log(task);
    } catch (error) {
        res.send(error);
    }
});

// Show All the Task
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

// Update Your Task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        )
        res.send(task);
    } catch (error) {
        res.send(error);
    }
})

// Delete Your Task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.send(task);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;