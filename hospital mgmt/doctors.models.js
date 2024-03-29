import mongoose from 'mongoose'

const Hospitalhours = new mongoose.Schema({}, {timestamps: true})

const doctorSchema = new mongoose.Schema({
  worksinHospital:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospitals' //we give 3rd bracket bwcause its an array and a single doctor can work in different hospitals
  }]
}, {timestamps: true})

export const Doctors = mongoose.model("Doctors",doctorSchema)