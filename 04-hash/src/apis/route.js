import { Router } from "express";
import { getUserData, getUserField, storeUserData } from "./api.js";

const router = Router();

router.post('/:userId/hash', storeUserData);

router.get('/:userId', getUserData);

router.get('/:userId/:field', getUserField);

export default router;