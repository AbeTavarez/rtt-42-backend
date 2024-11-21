import express from "express";
import Chats from "../models/chats.js";

const router = express.Router();

/**
 * GET /api/chats
 * @description Return all chats
 */
router.get("/", async (req, res, next) => {
  try {
    const chats = await Chats.find();
    res.json(chats);
  } catch (e) {
    console.error(e);
  }
});


/**
 * GET /api/:id
 * @description return a single chat by the id
 */
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const chat = await Chats.findById({ id });
    res.json({ chat });
  } catch (e) {
    console.error(e);
  }
});

/**
 * POST /api/chats/
 * @description create a new chat
 */
router.post('/', async (req, res, next) => {
    try {
        const newChat = await new Chats({title: "New Chat"});
        await newChat.save();
        res.status(201).json(newChat);
    } catch (e) {
        console.error(e);
        
    }
});

/**
 * POST /api/chats/:id/message
 * @description adds a new message in a chat
 */
router.post('/:id/message', async (req, res, next) => {
  try {
    const {id} = req.params;

    // find the chat by the id
    const chat = await Chats.findById(id);
    console.log(chat);

    // add a new message to the messages array
    chat.messages.push(req.body);

    await chat.save()

    res.status(201).json(chat)
    
  } catch (e) {
    console.error(e);
  }
});

router.delete('/:id', async(req, res, next) => {
  try {
    const {id} = req.params;
    const deletedChat = await Chats.findByIdAndDelete(id);
    res.json(deletedChat)
  } catch (e) {
    console.error(e);
    
  }
})



export default router;
