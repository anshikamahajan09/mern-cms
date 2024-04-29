import express from 'express';
import { addStudent } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/add-student',addStudent);

export default router;  