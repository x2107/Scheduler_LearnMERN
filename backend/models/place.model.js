const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Place = mongoose.model('Place', placeSchema)

module.exports = Place;
