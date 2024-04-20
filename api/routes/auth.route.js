import express from 'express';
import { signIn, signUp, signOut } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/sign-in/:userType',signIn); 
router.post('/sign-up/:userType',signUp); 
router.get('/sign-out',signOut);

export default router;

