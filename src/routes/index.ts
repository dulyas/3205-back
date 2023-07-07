
import { Router } from "express";
import { getDataController } from "@/controllers/data-controller";

const router = Router()

router.get('/data', getDataController)

export default router