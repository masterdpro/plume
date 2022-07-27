const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands/utils');

module.exports = {
    name: 'utils', 
    async runInteraction( client, interaction)  {

        const embed = new MessageEmbed()
        .setTitle('**Voici les commandes user.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/932846029735346176/1000904002021638194/Copie_de_Sans_titre_4.png')
        .setDescription('Voici la liste des commandes et leurs descriptions')
        .addFields(
            { name:'button', value: `Permet d'avoir un visuel sur les type de boutons.`},
            { name:'date', value: `Permet d'avoir la date.`},
            { name:'joke (bientô disponible)', value: `Permet de faire une blague.`},

         )
         .addFields(
             {name:'event', value: `Permet d'afficher un event presant sur le bot.`  },
             {name:'gay (bientôt disponible', value: `bah tu vera par toi même....` },
             {name:'ID (bientôt disponible)', value: `Permet d'afficher son ID.` },
             {name:'ping', value: `Permet d'afficher les information du bot.` },

         )
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        await interaction.reply({embeds: [embed], ephemeral: true});
     }
 };