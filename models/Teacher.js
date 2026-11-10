import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(

    {
        nome: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        especialidade: {
            type: String,
            required: true,
            trim: true
        },
        telefone: {
            type: Number,
            required: true,
            trim: true
        },
        ativo: {
            type: Boolean,
            default: true
        },
    },
    {
        collection: "teachers",
        timestamps: true,
    },
);
export default mongoose.model("Teacher", TeacherSchema)