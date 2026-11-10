import express from "express"
import studentController from "../controllers/studentController.js"

const router = express.Router()

router.post("/", studentController.createStudent)

router.get("/", studentController.getAllStudents)

router.get("/:id", studentController.getStudentById)

router.get("/active/active", studentController.getStudentsActive)


export default router;