import mongoose from "mongoose";
import { connectDb } from "../config/db.js";
import { redis } from "../config/redis.js";

export async function reply(req, res) {
    try {
        const reply = await redis.ping();

        res.json({ redis: reply });
    } catch (error) {
        console.log("Error in apis.reply: ", reply);
    }
}

export async function getConnectionName(req, res){
    try {
        await connectDb();

        res.json({ message: 'Connceted', database: mongoose.connection.name });
    } catch (error) {
        console.log("Error in apis.getConnectionName: ", error);
    }
}