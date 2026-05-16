import { Router } from "express";
import { redis } from "../config/redis.js";
import { getConnectionName, reply } from "./api.js";

const router = Router();

router.get('/redis', reply);

router.get('/mongo', getConnectionName);

export default router;