import dotenv from "dotenv"
import TelegramBot from 'node-telegram-bot-api'

dotenv.config()

const token = process.env.API_KEY || "";
let bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo(.+)/, (msg, match) => {

	// The 'msg' is the received Message from Telegram
	// and 'match' is the result of executing the regexp
	// above on the text content of the message

	let chatId = msg.chat.id;

	// The captured "whatever"
	let resp = match![1];

	// send back the matched "whatever" to the chat
	bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
    
  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Welcome to the bot Mr Adaji Anthony. Nicholas says Hi');
  }
  else {
	  bot.sendMessage(chatId, messageText || "");
  }


  
    // Process the incoming message here
  
  });