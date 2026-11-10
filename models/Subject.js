import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(

    {
        nome: {
            type: String,
            required: true,
            trim: true
        },
        codigo: {
            type: String,
            required: true,
            trim: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            trim: true,
        },
        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
            required: true,
        },
        ativa: {
            type: Boolean,
            default: true
        },
    },
    {
        collection: "subjects",
        timestamps: true,
    },
);
export default mongoose.model("Subject", SubjectSchema)