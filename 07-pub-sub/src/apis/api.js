import publisher from "../config/publisher.js";

export async function publish(req, res) {
    try {
        const payload = {
            title: req.body.title,
            createdAt: new Date().toISOString()
        };

        const receiver = await publisher.publish("notifications", JSON.stringify(payload));

        res.json({ message: `Notification sent to ${receiver} subscribers` });
    } catch (error) {
        console.log("Error in publish: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}