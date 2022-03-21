const { ShardingManager } = require('discord.js');
const env = require("dotenv")
env.config()

const manager = new ShardingManager('./build/bot.js', { token: process.env.BOT_TOKEN });

manager.on('shardCreate', (shard: any) => console.log(`Launched shard ${shard.id}`));

manager.spawn();