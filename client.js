const {Client, GatewayIntentBits} = require('discord.js');
require('dotenv/config');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`[client] bot sudah online sebagai ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);