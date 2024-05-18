import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  diagnosedWith:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true

  },
  BloodGrp:{
    type: String,
    required: true
  },
  Gender:{
    type: String,
    enum : ["M","F","O"]
  },

  Admittedin:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospitals"
  }

}, {timestamps: true})

export const Patients = mongoose.model("Patients",patientSchema)
