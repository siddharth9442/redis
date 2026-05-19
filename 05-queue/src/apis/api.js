import redis from "../config/redis.js";
import { QUEUE_KEY } from "../constants.js";

export async function addJobToQueue(req, res) {
    try {
        const job = {
            to: req.body.to,
            subject: req.body.subject,
            body: req.body.body,
            createdAt: new Date().toISOString()
        }

        await redis.lpush(QUEUE_KEY, JSON.stringify(job));

        res.status(200).json({ message: 'Job added to queue', queued: true, job });
    } catch (error) {
        console.log("Error in addJobToQueue: ", error);
        res.status(500).json({ message: 'Error adding job to queue', queued: false });
    }
}

export async function processQueue(req, res) {
    try {
        const jobData = await redis.rpop(QUEUE_KEY);

        if(!jobData) {
            return res.json({ message: 'No jobs in queue' });
        }

        const job = JSON.parse(jobData);

        // send email logic
        // ...

        // return response
        res.json({ message: 'Email sent successfully', job });
    } catch (error) {
        console.log("Error in processQueue: ", error);
        res.status(500).json({ message: 'Error processing queue' });
    }
}