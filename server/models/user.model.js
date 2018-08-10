const mongoose = require('mongoose');
// const validator = require('validator')
const validator = require('validator');
const sha256 = require('sha256');

const Schema = mongoose.Schema;

let hashPassword = (password) => {

    return sha256(password);
}

let userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 4,
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 4,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            isAsync: true,
            validator: (value) => validator.isEmail(value),
            message: 'This is not a valid E-mail'
        }
    },

        password: {
        type: String,
        required: true,
        set: hashPassword

    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);

