import express from 'express';
import { makeAnnouncement } from '../controllers/general.controller.js';
import { fetchAnnouncements } from '../controllers/general.controller.js';

const router = express.Router();

router.post('/makeAnnouncement', makeAnnouncement);
router.post('/fetchAnnouncements', fetchAnnouncements);

export default router;