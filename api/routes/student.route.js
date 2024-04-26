import express from 'express';
import { fetchEnrolledCourses  } from '../controllers/student.controller.js';


const router = express.Router();

router.post('/fetchEnrolledCourses', fetchEnrolledCourses);

export default router;

