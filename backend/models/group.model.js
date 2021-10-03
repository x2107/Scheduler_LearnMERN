const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Person = new Schema({name: String})
const Place = new Schema({name:String})

const groupSchema = new Schema({
    groupname:{ type: String, required: true, unique: true, minlength: 2},
    password:{ type:String, required: true, unique: false, minlength: 2},
    grouplist:[Person],
    placelist:[Place]
}, {
    timestamps: true,
});

const Group = mongoose.model('Group', groupSchema)

module.exports = Group