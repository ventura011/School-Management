import Student from "../models/Student.js";
import studentService from "../services/studentService.js";

const createStudent = async (req, res, next) => {
    try {
        const student = await studentService.createStudent(req.body)

        res.status(201).json({
            message: "Estudante registrado com sucesso!",
            data: student,
        })

    } catch (error) {
        next (error)
    }
}

const getAllStudents = async (req, res, next) => {
    try {
        const student = await studentService.getAllStudents()

        res.status(200).json({
            message: "Estudantes registrados:",
            data: student,
        })
    } catch (error) {
        next (error)
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const student = await studentService.getStudentById(req.params.id)

        res.status(200).json({
            message: "Estudante encontrado:",
            data: student,
        })

    } catch (error) {
        next (error)
    }
}

const getStudentsActive = async (req, res, next) => {
    try {
        const student = await studentService.getStudentsActive()

        res.status(200).json({
            message: "Estudantes encontrados:",
            data: student,
        })

    } catch (error) {
        next (error)
    }
}

export default {
    createStudent,
    getAllStudents,
    getStudentById,
    getStudentsActive,
}