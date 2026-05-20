import { emailQueue } from "../config/queue.js";

export async function sendEmail(req, res) {
    try {
        const job = emailQueue.add(
            "send-email",
            {
                to: req.body.to,
                name: req.body.name,
            },
            {
                attempts: 3,    // retry up to 3 times if fails
                backoff: {
                    type: "exponential",
                    delay: 5000
                }
            }
        )
        
        res.status(200).json({ message: "Email job added to queue" });
    } catch (error) {
        console.log("Error in sendEmail: ", error);
        res.status(500).json({ message: "Error in sendEmail: ", error });
    }
}