import mongoose from 'mongoose'

const mediCalrecordSchema = new mongoose.Schema({}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord",mediCalrecordSchema)