const { Schema, model } = require('mongoose');

const objetoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Mensaje en caso de no ingresar un nombre'],
            unique: true
        },
        estado: {
            type: Boolean,
            default: true
        },
        age: {
            type: Number,
            min: 18,
            max: 100
        },
    }
)

const Objeto = model('Objeto', objetoSchema);

module.exports = {
    Objeto
}