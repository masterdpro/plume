const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'user', 
    async runInteraction( client, interaction)  {
        const embed = new MessageEmbed()
        .setTitle('**Voici les commandes user.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/932846029735346176/1000904002021638194/Copie_de_Sans_titre_4.png')
        .setDescription('Voici la liste des commandes et leurs descriptions')
        .addFields(
            { name:'invite', value: `Permet d'optenire l'invitation du bot.`},
            { name:'poll', value: `Permet de créer un sondage.`},

         )
         .addFields(
             {name:'pp (en devloppement)', value: `Permet d'afficher la photo de profil d'un utilisateur.`  },
             {name:'userinfo', value: `Permet d'avoir les informations d'un membre utilisable uniquement via les application.` },
             {name:'voc (en developpement)', value: `Permet de faire join le bot a un vocal.` },

         )
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        await interaction.reply({embeds: [embed], ephemeral: true});
     }
 };