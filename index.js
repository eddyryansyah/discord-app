// Load environment variables
require('dotenv').config();

// Import Client dari Discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Inisialisasi client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Event: Bot berhasil login
client.once('ready', () => {
  console.log(`🤖 Bot ${client.user.tag} sudah online di server Eddy's Store!`);
});

// Event: Menanggapi pesan
client.on('messageCreate', message => {
  // Abaikan pesan dari bot sendiri
  if (message.author.bot) return;

  // Respon ke perintah "!halo"
  if (message.content.toLowerCase() === '!halo') {
    message.channel.send(`Halo ${message.author.username}, selamat datang di Eddy's Store! 🛒`);
  }
});

// Login menggunakan token dari .env
client.login(process.env.DISCORD_TOKEN);