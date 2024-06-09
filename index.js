import dotenv from 'dotenv';
dotenv.config();

import app from './app.js'
import connectDB from './config/connectDb.js';

const {PORT, MONGO_URL} = process.env;
app.listen(PORT,()=>{
    console.log(`Server is running`);
    connectDB(MONGO_URL)
});