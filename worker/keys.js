// worker/keys.js
// These are all the environment variables that should be provided to this container.
module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
};
