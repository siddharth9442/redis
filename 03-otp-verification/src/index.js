import express from 'express';

const app = express();


app.use(express.json());

import otpRouter from './apis/route.js';

app.use('/apis', otpRouter);


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});