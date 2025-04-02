import { Router } from "express";
import authenticateJWT from "../middlewares/auth.middleware";
import { getCurrentUser, changeCurrentPassword, updateAccountDetails, updateAvatar, updateCoverImage, getUserChannelDetails, getWatchHistory} from "../controllers/user.controller.js"

const router = Router();

router.route("/current-user").get(authenticateJWT, getCurrentUser);
router.route("/change-password").post(authenticateJWT, changeCurrentPassword);
router.route("/update-account").patch(authenticateJWT, updateAccountDetails);
router.route("/update-avatar").patch(authenticateJWT, updateAvatar);
router.route("/update-cover-image").patch(authenticateJWT, updateCoverImage);
router.route("/u/:userName").post(authenticateJWT, getUserChannelDetails);
router.route("/history").post(authenticateJWT, getWatchHistory);

export default router;