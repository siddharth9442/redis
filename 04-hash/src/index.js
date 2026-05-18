import express from 'express';

const app = express();


app.use(express.json());

import userRouter from './apis/route.js';

app.use('/apis/user', userRouter);


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});