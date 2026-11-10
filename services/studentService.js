import Student from "../models/Student.js";

const createStudent = async (data) => {
    const {nome, email, idade, matricula} = data

    if (!nome || !email || !idade || !matricula) {
        const error = new Error("Todos os campos são necessários!")
        error.statusCode = 400
        throw error
    }

    const studentExists = await Student.findOne({matricula})

    if (studentExists) {
        const error = new Error("O número de matrícula já está registrado!")
        error.statusCode = 400
        throw error
    }

    const student = await Student.create({
        nome,
        email,
        idade,
        matricula

    })

    return {
        _id: student._id,
        nome: student.nome,
        email: student.email,
        idade: student.idade,
        matricula: student.matricula,
        createdAt: student.createdAt,
        updateAt: student.updateAt
    }

}

const getAllStudents = async () => {
    return Student.find()
}

const getStudentById = async (id) => {
    const student = await Student.findById(id)

    if (!student) {
        const error = new Error("Estudante não encontrado. Tente novamente com outro id")
        error.statusCode = 404
        throw error
    }

    return student
}

const getStudentsActive = async () => {
    const student = await Student.find({
        ativo: true
    })
    if (!student) {
        const error = new Error("Sem estudantes ativos. Por favor, tente novamente mais tarde")
        error.statusCode = 404
        throw error
    }

    return student
}


export default {
    createStudent,
    getAllStudents,
    getStudentById,
    getStudentsActive
}