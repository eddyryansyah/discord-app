const axios = require('axios');
require('dotenv/config');

const infoBot = {
    name: "info-bot",
    description: "ini adalah info dari bot",
    contexts: [0,1,2],
    integration_types: [0,1]
};

const collectionBot = [infoBot];

try {
    const sendData = axios({
        url: `https://discord.com/api/v10/applications/${process.env.APPLICATION_ID}/commands`,
        method: "PUT",
        headers: {
            Authorization: `Bot ${process.env.BOT_TOKEN}`,
            'Content-Type': `application/json`
        },
        data: collectionBot
    });
    return sendData.data;
}

catch(e) {
    throw e;
}