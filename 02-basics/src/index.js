import express from 'express';

const app = express();

app.use(express.json());

import redisRouter from './apis/route.js';

app.use('/apis/', redisRouter);

let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("App is listening on port ", port);
});