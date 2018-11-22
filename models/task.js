const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Object Modeling Using mongoose.js

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);
