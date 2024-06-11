import express from "express";
import{
    getUser,
    getUserFriends,
    addRemoveFriend,
}from "../middleware/users.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

/** Read*/
router.get("/:id", verifyToken,getUser);
router.get("/:id", verifyToken,getUserFriends);
/**UPDATE */
router.patch("/id/:friendId", verifyToken,addRemoveFriend);
export default router;