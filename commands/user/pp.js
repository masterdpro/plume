const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pp', 
    category: 'utile',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'pp',
    examples: ['pp'],
    description: 'voir sa pp',
    run(client, message, args) {
        const mantion = message.mentions.users.find(avatarURL => avatarURL);
        const embed = new MessageEmbed()

        .setTitle(`la pdp de personne `)
        .setThumbnail (`https://cdn.discordapp.com/attachments/932842971169173514/985593944131915857/download.jpg`)
        message.channel.send({ embeds: [embed] });
    },
    runInteraction (client, interaction)  {
        interaction.reply('pas trop fonctionnel dcp evite');
    }
 };