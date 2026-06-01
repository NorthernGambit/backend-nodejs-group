import { Router } from "express";
import * as cartController from "../controllers/cart.controller.js";
// import * as authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// router.use(authMiddleware.authenticateKey);

router.get("/", cartController.getCarts);

export default router;
