import express from "express";

import { verifyToken } from "../middleware/verifyToken.js";
import { getDashboardData } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.use(verifyToken);

router.get("/", getDashboardData);

export default router;
