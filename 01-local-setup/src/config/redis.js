import Redis from "ioredis";;

let redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

// create client
export const redis = new Redis(redisUrl);