const { MessageEmbed} = require('discord.js');
const interactionCreate = require('../../event/client/interactionCreate');
const { runInteraction } = require('./test');

module.exports = {
    name: 'master', 
    category: 'cacher',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    devl: false,
    usage: 'master [message que tu veux que je dise]',
    examples: ['master je suis le meilleur'],
    description: 'permet a master de faire parler son bot :)',
    async run(client, message, args)  {
      if (!args[0]) return message.reply("mets le message que tu veux que je dise" );
      const msg = args.slice(0).join(' ')

  message.channel.send(`**MASTER DIT**: ${msg}`)
  message.delete(args.slice(0).join(' ') )
    }
}
