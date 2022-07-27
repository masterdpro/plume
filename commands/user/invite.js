const { MessageEmbed } = require('discord.js');
const {MessageModal } = require('discord.js');

module.exports = {
    name: 'invite', 
    category: 'user',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'invite',
    examples: ['invite'],
    description: 'invitation du bot',
    run(client, message, args)  {
        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('► clique la pour inviter plume-bot \n dans ton/tes serveurs ◄')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=962787860644266046&permissions=8&scope=applications.commands%20bot')
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL()});
        message.channel.send({ embeds: [embed] });
    },
    runInteraction (client, interaction)  {
        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('► clique la pour inviter plume-bot \n dans ton/tes serveurs ◄')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=962787860644266046&permissions=8&scope=applications.commands%20bot')
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
        interaction.reply({ embeds: [embed] });
        
    }
 };
 