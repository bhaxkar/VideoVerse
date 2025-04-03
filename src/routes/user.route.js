import { Router } from "express";
import authenticateJWT from "../middlewares/auth.middleware.js";
import {
  changeCurrentPassword,
  updateAccountDetails,
  updateAvatar,
  updateCoverImage,
  getUserChannelDetails,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/change-password").post(authenticateJWT, changeCurrentPassword);
router.route("/update-account").patch(authenticateJWT, updateAccountDetails);
router
  .route("/update-avatar")
  .patch(authenticateJWT, upload.single("avatar"), updateAvatar);

router
  .route("/update-cover-image")
  .patch(authenticateJWT, upload.single("coverImage"), updateCoverImage);

router.route("/u/:userName").post(authenticateJWT, getUserChannelDetails);
router.route("/history").post(authenticateJWT, getWatchHistory);

export default router;