const express = require('express');
const bodyParser = require('body-parser');
const {verifyKeyMiddleware, InteractionType, InteractionResponseType} = require("discord-interactions");

require('dotenv/config');

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send({ok: true})
})

app.post("/api/interactions", verifyKeyMiddleware(process.env.PUBLIC_KEY), (req, res, next) => {
  if(req.body.type == InteractionType.PING){
    res.send({type: InteractionResponseType.PONG})
  }
  if(req.body.type == InteractionType.APPLICATION_COMMAND){
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
      content: `Ini adalah bot informatif yang memudahkan pengguna dalam mengakses berbagai informasi pada server melalui perintah slash command.`
      }
    })
  }
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`[log] server sudah berjalan di port ${port}`);
})