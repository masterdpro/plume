const { MessageEmbed} = require('discord.js');
const { runInteraction } = require('./test');

module.exports = {
    name: 'say', 
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    devl: false,
    usage: 'say [message que tu veux que je dise]',
    examples: ['say je suis le meilleur'],
    description: 'je revois le message que tu me demande de dire',
    async run(client, message, args)  {
      if (!args[0]) return message.reply("mets le message que tu veux que je dise" );
      const says = args.slice(0).join(' ')
  
  message.delete(args.slice(0).join(' ') )
  message.channel.send(`${says}`)
  client.channels.cache.get('993252306114068671').send(`${message.author.username} ma fait dire: ${says}`)
    },

    options: [
        {
            name: 'message',
            description: 'message que tu veux que je dise',
            type: 'STRING',
            required: true,

        }
      ],

    async runInteraction(client, interaction, message) {
    const say = interaction.options.getString('message');

    interaction.channel.send(`${say}`); 
    client.channels.cache.get('993252306114068671').send(`${interaction.user.tag} ma fait dire: ${say}`);
    }
    
};
