import express from 'express'

const router = express.Router()



/**
 * GET /chats
 * @description Return all chats
 */
router.get('/', (req, res) => {
    res.send('Hello from chats')
});



export default router;
