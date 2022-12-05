const Patient = require('../models/patient');


const all_patients = (req, res) => {
    Patient.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
}

const add_patient = (req, res) => {
    const patient = new Patient(req.body);

    patient.save()
        .then(() => {
            console.log("Added Successfully!")
        })
        .catch((err) => {
            console.log(err);
        })
}

const update_patient = (req, res) => {
    const id = req.params.id;
    const patient = Patient.findById(id)
        .then(() => console.log("found!"))
        .catch((err) => console.log(err));
    let date = new Date;
    let time = "";
    if(req.body.date){
        date = req.body.date;
    } else {
        date = patient.date;
    }
    if(req.body.time){
        time = req.body.time;
    } else {
        time = patient.time;
    }
    Patient.findByIdAndUpdate(id, {"time" : time, "date": date})
        .then(() => console.log("Updated Successfully!"))
        .catch((err) => console.log(err));
}

const get_patient = (req, res) => {
    const id = req.params.id;
    Patient.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
}

const delete_patient = (req, res) => {
    const id = req.params.id;

    Patient.findByIdAndDelete(id)
        .then(() => {
            console.log("Patient deleted succefully!");
        })
        .catch(err => console.log(err));
}

module.exports = {
    all_patients,
    add_patient,
    get_patient,
    delete_patient,
    update_patient
}