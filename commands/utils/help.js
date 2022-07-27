const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton  } = require('discord.js');

const butttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
           .setCustomId('admin')
           .setLabel('admin')
           .setStyle('SUCCESS'),

        new MessageButton()
           .setCustomId('moderation')
           .setLabel('moderation')
           .setStyle('SUCCESS'),

        new MessageButton()
           .setCustomId('reaction')
           .setLabel('reaction')
           .setStyle('SUCCESS'),

        new MessageButton()
           .setCustomId('user')
           .setLabel('user')
           .setStyle('SUCCESS'),

           new MessageButton()
           .setCustomId('utils')
           .setLabel('utils')
           .setStyle('SUCCESS'),
           


    )

module.exports = {
    name: 'help', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: true,
    devl: false,
    usage: 'foo',
    examples: ['foo'],
    description: 'foo',
    async run (client, message, args) {
        await message.channel.send('fait !plume')
    },
    async runInteraction( client, interaction)  {

        const embed = new MessageEmbed()
        .setTitle('**Voici les commandes disponible sur ce bot.**')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription('Voici la liste des categories de commandes.')
        .addFields(
            { name:'admin', value: `Commande pour l'administration.`},
            { name:'moderation', value: `Commmandes utile pour la moderation d'un serveur.`, },

         )
         .addFields(
             {name:'reaction', value: `Permet d'exprimer son emotion a quelqu'un.`  },
            {name:'user/utils', value: `commandes d'iverse utile.`},
           
         )
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        await interaction.reply({embeds: [embed], components: [butttons], ephemeral: true })
    }
 }
