const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//get all
router.get('/', async (req,res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});

//get one
router.get('/:id',async (req,res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//save
router.post('/', async (req,res)=>{
    const {title,description} = req.body;
    const task = new Task({
        title,
        description
    });
    task.save()
    res.json({
        status : 'tarea guardada'
    });
});

//update
router.put('/:id',async (req,res) => {
    const {title , description} = req.body;
    const newTask = {title,description};
    await Task.findOneAndUpdate( req.params.id ,newTask);
    res.json({
        status : 'se actualizo'
    });
});

//delete
router.delete('/:id', async (req,res) => {
    await Task.findOneAndDelete(req.params.id);
    res.json({
        status: 'se borro'
    })
});

module.exports = router;