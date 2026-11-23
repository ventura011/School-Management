import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"


const router = express.Router()

router.post(
    "/",
    authMiddleware, enrollmentController.createEnrollment
)

router.get(
    "/",
    authMiddleware, adminMiddleware, enrollmentController.getAllEnrollments
)

router.get(
    "/:id",
    authMiddleware, enrollmentController.getEnrollmentById
)

router.get(
    "/student/:studentId",
    authMiddleware, enrollmentController.getEnrollmentByStudentId
)

router.get(
    "/subject/:subjectId",
    authMiddleware, enrollmentController.getEnrollmentBySubjectId
)

router.get(
    "/status/:status",
    authMiddleware, adminMiddleware, enrollmentController.getEnrollmentByStatus
)

router.get(
    "//count",
    authMiddleware, adminMiddleware, enrollmentController.countEnrollments
)

// router.patch(
//     "/:id/grade",
//      enrollmentController.updateGrade
//     )

    router.patch(
        "/:id/status", 
        authMiddleware, adminMiddleware, enrollmentController.updateEnrollmentStatus
    )

    router.delete(
        "/:id",
         authMiddleware, adminMiddleware, enrollmentController.deleteEnrollment
        )

export default router;