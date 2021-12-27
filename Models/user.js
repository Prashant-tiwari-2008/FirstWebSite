const mongoose = require('mongoose');
const { Schema } = mongoose


const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email_id: {
        type: String,
        require: true,
        unique: true
    },
    phone_no: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("userModel",UserSchema)