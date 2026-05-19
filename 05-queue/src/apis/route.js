import { Router } from "express";
import { addJobToQueue, processQueue } from "./api.js";

const router = Router();

router.post('/email/add', addJobToQueue);

router.get('/email/process', processQueue);

export default router;