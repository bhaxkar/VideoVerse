import { Router } from "express";
import {
  signup,
  login,
  logout,
  refreshAccessToken,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import authenticateJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  signup
);

/**
 * The Request object will be populated with a files object which maps
 * each field name to an array of the associated file information objects.
 *
 * When we use the Multer middleware, it provides 'req.file' access, while
 * Express provides access to 'req.body' for form data.
 */

router.route("/login").post(login);
router.route("/logout").post(authenticateJWT, logout);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/me").get(authenticateJWT, getCurrentUser);

export default router;