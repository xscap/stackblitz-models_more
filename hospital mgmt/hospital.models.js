import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },

  address:{
    type: String,
    required: true
  },

  pincode:{
    type: String
  }
  
}, {timestamps: true})

export const Hospitals = mongoose.model("Hospitals",hospitalSchema)
