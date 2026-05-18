import redis from '../config/redis.js';

function getKey(userId) {
    return `user:${userId}:hash`;
}

export async function storeUserData(req, res) {
    try {
        const userId = req.params.userId;

        await redis.hset(getKey(userId), req.body);
        res.status(200).json({ message: "User data stored successfully", success: true });
    } catch (error) {
        console.log("Error in storeUserData: ", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

export async function getUserData(req, res) {
    try {
        const userId = req.params.userId;

        const userData = await redis.hgetall(getKey(userId));

        res.status(200).json({ message: "User data retrieved successfully", success: true, data: userData });
        
    } catch (error) {
        console.log("Error in getUserData: ", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

export async function getUserField(req, res) {
    try {
        const userId = req.params.userId;
        const field = req.params.field;

        const fieldValue = await redis.hget(getKey(userId), field);

        res.status(200).json({ message: "User field retrieved successfully", success: true, data: fieldValue });
    } catch (error) {
        console.log("Error in getUserField: ", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}