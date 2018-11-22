

// Task Routes Model Usinfg Express.js

const express = require('express');

const router = express.Router();

const Task = require('../../models/task');


// @route  GET api/tasks.
// @desc   GET All tasks.
// @access Public

router.get('/', (req, res) => {
    Task.find()
        .sort({ date: -1})
        .then(tasks => res.json(tasks))
});



// @route  POST api/tasks.
// @desc   CREATE A task
// @access Public

router.post('/', (req, res) => {
    const newTask = new Task({
        name: req.body.name
    });

    newTask.save().then(task => res.json(task));
});


// @route   DELETE api/tasks/:id
// @desc    Delete A task
// @access  Public

router.delete('/:id', (req, res) => {
    Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;
