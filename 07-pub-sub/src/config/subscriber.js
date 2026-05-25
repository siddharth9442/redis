import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const subscriber = new Redis(redisUrl);

subscriber.subscribe('notifications', (err) => {
    if(err) {
        console.log("Error: ", err);
        return;
    }

    console.log('Subscribed successfully!');
});

subscriber.on('message', (channel, message) => {
    console.log("Received on ", channel, ": ", JSON.parse(message));
});

export default redis;