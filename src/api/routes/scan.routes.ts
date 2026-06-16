import { Router } from "express";
import { scanWebsite } from "../controllers/scan.controller";

const router = Router();

router.post("/scan", scanWebsite);

export default router;