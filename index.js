const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose');
const client = new Client({ intents: 515 });
const logger = require('./utils/logger');

const salonlog = client.channels.cache.get('970796880252534814'); 

['commands', 'buttons'].forEach(x => client[x] = new Collection());
['commandsutils', 'eventutils', 'buttonUtils'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

process.on('exit', code => {logger.client(`le porsecuse cest stoper avec le code: ${code}`)});
process.on('uncaughtException', (err, origin) => {
    logger.error(`UNCAUGHT_EXEPTION: ${err}`,);
    console.log({err})
 });

process.on('unhandleRejection', (reason, promise) => {
    logger.warn(`UNHANDLED_REJECTION: ${reason}------`);
    console.log(promise);
});

process.on('warning', (...args) => logger.warn(...args));


mongoose.connect(process.env.DATABASE_URI,{
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
    family: 4 
}).then (() => {logger.client(' - client co a la database'); })
.catch(err => {logger.error(err); });

client.login(process.env.plumebot_token);

