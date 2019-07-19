const mongoose = require('mongoose')

const vampireSchema = new mongoose.Schema({
    name: {type: String, required: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: {type: String},
    dob: Date,
    loves: [String],
    location: {type: String},
    gender: {type: String},
    victims: {type: Number, min: 0}
})

const Vampire = mongoose.model('Vampire', vampireSchema)

module.exports = Vampire;