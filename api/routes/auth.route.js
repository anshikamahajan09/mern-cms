import express from 'express';
import { signIn, signUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/sign-in/:userType',signIn); 
router.post('/sign-up/:userType',signUp); 

export default router;

