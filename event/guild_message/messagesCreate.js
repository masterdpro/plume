const { Client, Collection } = require('discord.js');
const { type } = require("../../commands/user/userinfo");
const { MessageEmbed, BaseGuildTextChannel } = require('discord.js');
const dayjs = require('dayjs')
const logger = require('../../utils/logger');
const bot = new Client({ intents: 32767});

const prefix = '!';
const ownerId = '722450303919587409';
const serv = '807434421279916034';
const devl = ('722450303919587409', '706560359019839509')

module.exports = {
    name: 'messageCreate', 
    once: false,
    execute(client, message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    if (cmdName.length == 0) return;

    
    const salonlog = client.channels.cache.get('970796880252534814'); 
    let cmd = client.commands.get(cmdName);
    if (!cmd) return message.reply('commande existe pas');

    if (cmd.ownerOnly) {
        if (message.author.id != ownerId) return message.reply('seulement <@722450303919587409> a accès a cette commande \n si tu a besoin d\aide envoie lui un message');
    }

    if (cmd.devl) {
        if (message.author.id != devl) return message.reply('commande en developpement');
    }
    bot.on('message', async message => {
        console.log(message.channel.type)
        if(message.channel.type === "dm"){
            channel = Client.channel.get('812135135422971984')
            channel.send(message.content)
            console.log(message.content)
        }
    })
    

    if (!message.member.permissions.has([cmd.permissions])) return message.reply(`malheureusement tu n'a pas la/les permission pour faire cette commande ): tu a besoin de (\`${cmd.permissions.join(', ')}\`)  `); 

    if (cmd) cmd.run(client, message, args)
    logger.command(`commande exécutée\n la commande est:  ${cmd.name} a [${dayjs().format('DD/MM - HH:mm:ss')}] par ${message.author.tag} sur le serveur  `)
    salonlog.send(`commande exécutée\n la commande est:  ${cmd.name} \n ella a été executé le ${dayjs().format('DD/MM')} a ${dayjs().format('HH:mm:ss')} `)
        
    
}}