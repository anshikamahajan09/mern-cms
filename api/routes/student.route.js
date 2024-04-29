import express from 'express';
import { fetchAcademicInfo  } from '../controllers/student.controller.js';



const router = express.Router();

router.post('/fetchAcademicInfo', fetchAcademicInfo);

export default router;

