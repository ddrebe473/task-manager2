const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'Must Provided Name'],
        trim: true,
        maxlength: [20, 'Name must be less than 20 characters'],
    },

});

module.exports = mongoose.model('Task', TaskSchema);
// model.find({completed:true})