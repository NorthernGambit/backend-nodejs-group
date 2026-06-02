import { Router } from "express";
import * as ordersController from "../controllers/orders.controller.js";
import { authenticateOrders } from "../middlewares/auth.middleware.js";
import * as authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware.authenticateKey);

// GET all orders
router.get("/", ordersController.getOrders);

// GET order by userId
router.get("/:userId", authenticateOrders, ordersController.getOrderById);

export default router;
