import { Router } from "express";
import { signup, login, logout, refreshAccessToken } from "../controllers/auth.controller.js"
import authenticateJWT from "../middlewares/auth.middleware.js"

const router = Router();

router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/logout").post(authenticateJWT, logout)
router.route("/refresh-token").post(refreshAccessToken)

export default router;