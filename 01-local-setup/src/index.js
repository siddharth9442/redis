import express from 'express';
import mongoose from 'mongoose';
import { redis } from './config/redis.js';


const app = express();



import apiRouter from './apis/route.js';

app.use('/apis', apiRouter);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: ", 3000);
});