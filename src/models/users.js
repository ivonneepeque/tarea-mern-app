const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre:  {
        type: String,
        requires: true,
    },
    apellido: {
        type: String,
        requires: true,
    },
    edad: String,
    nacionalidad: String,
    profesion: String
}, {
    timestamps:true
});

module.exports = model('users', userSchema);