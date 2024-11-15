import express from "express";
import { fetchAllChats } from "../controllers/chats.js";

const router = express.Router();

/**
 * GET /api/chats
 * @description Return all chats
 */
router.get("/", fetchAllChats);

export default router;
