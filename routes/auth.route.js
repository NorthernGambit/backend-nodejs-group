import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

// POST register user
router.post("/register", registerUser, async (req, res, next) => {});

// POST login user
router.post("/login", loginUser, async (req, res, next) => {});

export default router;
