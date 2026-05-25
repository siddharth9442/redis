import Router from 'express';
import { publish } from './api.js';

const router = Router();

router.post('/notifications', publish)

export default router;