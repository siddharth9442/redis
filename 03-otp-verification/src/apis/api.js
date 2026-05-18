import redis from '../config/redis.js';

export function otpKey(phoneNumber) {
    return `otp:${phoneNumber}`;
}

export async function sendOtp(req, res) {
    try {
        const { phoneNumber } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);
        await redis.set(otpKey(phoneNumber), otp, 'EX', 60);
        res.json({ message: "OTP sent successfully", success: true, data: { otp } });
    } catch (error) {
        console.log("Error in sendOtp: ", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

export async function verifyOtp(req, res) {
    try {
        const { phoneNumber, otp } = req.body;
        const storedOtp = await redis.get(otpKey(phoneNumber));
        if (!storedOtp) {
            return res.status(404).json({ message: "OTP not found", success: false });
        }

        if (storedOtp !== otp) {
            return res.status(400).json({ message: "Invalid OTP", success: false });
        }

        await redis.del(otpKey(phoneNumber));
        res.json({ message: "OTP verified successfully", success: true, data: { otp } });
    } catch (error) {
        console.log("Error in verifyOtp: ", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

export async function getExpiry(req, res) {
    try {
        const { phoneNumber } = req.params;
        const ttl = await redis.ttl(otpKey(phoneNumber));
        res.json({ message: "OTP expiry retrieved successfully", success: true, data: { ttl } });
    } catch (error) {
        console.log("Error in getExpiry: ", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}