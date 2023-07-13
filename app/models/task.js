const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true,'name is required'],
        trim: true,
        maxLength:[30,'name cannot be more than 30 char']

    }, completed: {
        type: Boolean,
        default: false,
        
    }
})

module.exports = mongoose.model('Task',TaskSchema)