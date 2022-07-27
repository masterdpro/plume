const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'oui1', 
    async runInteraction( client, interaction)  {
        const embed = new MessageEmbed()
        .setTitle('tu aimes le meme genre que toi n\ et c cool')
        .setImage('https://cdn.discordapp.com/attachments/932842971169173514/995821978923577415/Gay_Pride_Flag.svg.png')
        .setDescription('ta grand')
        .setThumbnail('https://cdn.discordapp.com/attachments/932842971169173514/995821978923577415/Gay_Pride_Flag.svg.png')
        await interaction.reply({embeds: [embed]})
     }
 };