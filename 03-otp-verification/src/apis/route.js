import Router from 'express';
import { getExpiry, sendOtp, verifyOtp } from './api.js';

const router = Router();

router.post('/send-otp', sendOtp);

router.post('/verify-otp', verifyOtp);

router.get('/get-expiry/:phoneNumber', getExpiry);

export default router;