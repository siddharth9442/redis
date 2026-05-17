import { BANNER_KEY } from "../constants.js";
import redis from "../config/redis.js";

export async function setBanner(req, res) {
    try {
        await redis.set(BANNER_KEY, JSON.stringify(req.body) || "Welcome");

        res.json({ message: "banner data stored cached successfully", success: true });
    } catch (error) {
        console.log("Error in setBanner: ", error);      
    }
}

export async function getBanner(req, res) {
    try {
        let bannerData = await redis.get(BANNER_KEY);
        res.json({ message: "banner details fetched successfully", success: true, data: JSON.parse(bannerData) });
    } catch (error) {
        console.log("Error in getBanner: ", error);
    }
}

export async function deleteBanner(req, res) {
    try {
        await redis.del(BANNER_KEY);
        res.json({ message: "banner details deleted successfully", success: true });
    } catch (error) {
        console.log("Error in deleteBanner: ", error);
    }
}

export async function checkBanner(req, res) {
    try {
        const banner = await redis.exists(BANNER_KEY);
        res.json({ success: true, isExists: Boolean(banner) });
    } catch (error) {
        console.log("Error in checkBanner: ", error);
    }
}