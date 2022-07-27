const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'moderation', 
    async runInteraction( client, interaction)  {

        const embed = new MessageEmbed()
        .setTitle('**Voici les commandes de modération.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/969426706777665596/1000830439033929799/Copie_de_Sans_titre_2.png')
        .setDescription('Voici la liste des commandes et leurs descriptions')
        .addFields(
            { name:'ban', value: `Permet de bannir un membre.`},
            { name:'clear', value: `Permet de supprimer un certain nombre de message.`},

         )
         .addFields(
             {name:'Fban', value: `Permet de faire croire a une personne qu'il est ban.`  },
             {name:'kick', value: `Permet de botter un membre du serveur.` },
             {name:'tempban', value: `Permet de d'exclure un membre.` },
             {name:'unban', value: `Permet de debannire un membre banni.` }
           
         )
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        await interaction.reply({embeds: [embed], ephemeral: true});
     }
 };