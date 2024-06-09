import express from 'express';
import cors from 'cors';
import { getAllUsers } from './routes/userRoute.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", getAllUsers);


export default app;