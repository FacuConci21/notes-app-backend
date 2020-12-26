const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        unique: true,
        type: String,
        trim: true,
        required: true
    }
},
    {
        timestamps:true
    }
);


module.exports = model('User', userSchema);


