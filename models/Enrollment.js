import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        subjectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
        },
        dataMatricula: {
            type: Date,
            required: true,
            default: Date.now,
        },
        status: {
            type: String,
            required: true,
            enum: ["Ativa", "Concluida", "Cancelada"],
            default: "Ativa",
            lowercase: true,
            trim: true
        },
        notaFinal: {
            type: Number,
            required: true
        },
    },

    {
        collection: "enrollments",
        timestamps: true
    }
);
export default mongoose.model("Enrollment", EnrollmentSchema)