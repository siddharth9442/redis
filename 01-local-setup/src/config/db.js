import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/mongo";

export async function connectDb(){
    try {
        await mongoose.connect(mongoUrl, () => {
            console.log("MongoDB connected!: ", Date.now());
        });     
    } catch (error) {
        console.log("Error in connectDb: ", error);
    }
}