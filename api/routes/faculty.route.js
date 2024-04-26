import express from 'express';
import { markAttendance } from '../controllers/faculty.controller.js';
import { fetchAttendance } from '../controllers/faculty.controller.js';
// import { fetchFaculty } from '../controllers/faculty.controller.js';


const router = express.Router();

router.post('/markAttendance', markAttendance); 
router.post('/fetchAttendance', fetchAttendance);
// router.get('/fetchFaculty', fetchFaculty);

export default router;

