const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin', 
    async runInteraction( client, interaction)  {

        const embed = new MessageEmbed()
        .setTitle('**Voici les commandes administrateur.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/969426706777665596/1000829615281021030/Copie_de_Sans_titre.png')
        .setDescription('Voici la liste des commandes et leurs descriptions')
        .addFields(
            { name:'embedmaker (en developpement)', value: `Te permet de créer ton propre embed.`},
            { name:'mp', value: `Permet d'envoyer un message a utilisateur voulu.`},
            {name:'say', value: `Permet de faire dire au bot se que tu desire.`  }
         )
    
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        await interaction.reply({embeds:[embed], ephemeral: true});
     }
 };