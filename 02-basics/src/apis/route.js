import { Router } from "express";
import { checkBanner, deleteBanner, getBanner, setBanner } from "./api.js";

const router = Router();

router.post('/banner', setBanner);

router.get('/banner', getBanner);

router.delete('/banner', deleteBanner);

router.get('/banner/exists', checkBanner);

export default router;