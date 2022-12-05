const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    date: {
        type: Date, 
        required: true
    },
    time: {
        type: String
    },
    phone: {
        type: String, 
        required: true
    },
    message: {
        type: String,
    }
}, { timestamps: true });

const patient = mongoose.model('Patient', patientSchema);
module.exports = patient;
