const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reaction', 
    async runInteraction( client, interaction)  {

        const embed = new MessageEmbed()
        .setTitle('**Voici les commandes de reaction.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/969426706777665596/1000901762682736751/Copie_de_Sans_titre_3.png')
        .setDescription('Voici la liste des commandes et leurs descriptions')
        .addFields(
            { name:'hug', value: `Permet de caliner un utilisateur.`},
            { name:'kiss', value: `Permet d'embrasser un membre'.`},

         )
         .addFields(
             {name:'slap', value: `Permet de claquer un membre.`  }
           
         )
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        await interaction.reply({embeds: [embed], ephemeral: true});
     }
 };