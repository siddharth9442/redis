import Redis from 'ioredis';

let redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const publisher = new Redis(redisUrl);

export default publisher;