import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"


const router = express.Router()

router.post(
    "/",
    enrollmentController.createEnrollment
)

router.get(
    "/",
    enrollmentController.getAllEnrollments
)

router.get(
    "/:id",
    enrollmentController.getEnrollmentById
)

router.get(
    "/student/:studentId",
    enrollmentController.getEnrollmentByStudentId
)

router.get(
    "/subject/:subjectId",
    enrollmentController.getEnrollmentBySubjectId
)

router.get(
    "/status/:status",
    enrollmentController.getEnrollmentByStatus
)

router.get(
    "//count",
    enrollmentController.countEnrollments
)

// router.patch(
//     "/:id/grade",
//      enrollmentController.updateGrade
//     )

    router.patch(
        "/:id/status", 
        enrollmentController.updateEnrollmentStatus
    )

    router.delete(
        "/:id",
         enrollmentController.deleteEnrollment
        )

export default router;