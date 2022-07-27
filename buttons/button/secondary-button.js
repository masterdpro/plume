const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'secondary-button', 
    async runInteraction( client, interaction)  {
        await interaction.reply({content: 'c moi le plus bô'})
     }
 };