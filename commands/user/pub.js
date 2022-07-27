const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pub', 
    category: 'user',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'pub',
    examples: ['pub'],
    description: 'mes pub',
    run (client, message, args) {
        const embed = new MessageEmbed()
        .setTitle('mes réseau')
        .setURL('https://linktr.ee/masterdpro')
        message.channel.send({ embeds: [embed] });
    },
    runInteraction (client, interaction)  {
        interaction.reply('ehhhhh flemme de faire un truc styller embed tout le tralala \n https://linktr.ee/masterdpro ');
    }
 };