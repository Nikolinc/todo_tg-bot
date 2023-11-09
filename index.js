require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const webAppUrl = 'https://habr.com/ru/articles/'

const startMSG = "Добро пожаловать в наше Todo приложение! Мы рады приветствовать вас здесь. Здесь вы сможете легко организовывать свои задачи и планы. Просто добавьте новую задачу и установите срок выполнения. Наш бот поможет вам следить за всеми делами. Начнем?"

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, startMSG, {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Todo',
                        web_app: { url: webAppUrl }
                    }]
                ]
            }
        });
    }

});