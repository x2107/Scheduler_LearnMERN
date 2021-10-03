const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Place = new Schema({name:String})

const userSchema = new Schema({
    username:{ type: String, required: true, unique: true, minlength: 2},
    room:{ type:String, required: true, minlength: 2},
    password:{ type:String, required: true, unique: false, minlength: 2},
    where: [Place]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;