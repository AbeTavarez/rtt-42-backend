import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors';
import chatsRouter from './routes/chats.js';
import { connect } from './db/connect.js';


dotenv.config();
connect();


const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes
app.use('/api/chats', chatsRouter);

app.get('/', async (req, res) => {
    res.send("Welcome to my API")
});


// Error handler
app.use((error, req, res, next) => {
    res.status(500).json({error});
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});