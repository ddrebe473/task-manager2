const fs = require('fs');
const { uuid } = require('uuidv4');
const Task = require('../model/Task');

const getTasks = async (req, res) => {
    const taskList = await Task.find({});
    res.status(200).json(taskList);
};

const createTask = async (req, res) => {
    //create a new task
    const { name } = req.body;

    await Task.create({ name: name });

    return res.status(200).json(true);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (task) {
        await task.delete();
    }

    return res.status(200).json(true);
};
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    await Task.findByIdAndUpdate(id,{name:name})

    return res.status(200).json(true);
};
module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
};
