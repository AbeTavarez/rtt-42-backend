import Chats from "../models/chats.js";

export async function fetchAllChats(req, res, next) {
    try {
        const chats = await Chats.find();
        res.json(chats);
    } catch (e) {
        console.error(e);
        
    }
}