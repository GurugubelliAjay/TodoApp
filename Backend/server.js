import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';
import path from 'path';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/Frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html'));
    });
}
app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`)
    connectDB();
});