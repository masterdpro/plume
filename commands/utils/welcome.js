const {MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');

const butttons = new MessageActionRow()
    .addComponents(

        new MessageButton()
           .setCustomId('succes-button')
           .setLabel('succes')
           .setStyle('SUCCESS'),

        new MessageButton()
           .setCustomId('danger-button')
           .setLabel('danger')
           .setStyle('DANGER')
      

    )

const welcomeEmbed = new MessageEmbed()
        .setTitle(' regle du serveur')
        .setDescription('reglement')
        .setFooter({text: 'bienvenue'})
        .setTimestamp()
module.exports = {
    name: 'wlc', 
    category: 'cacher',
    permissions:['SEND_MESSAGES'],
    ownerOnly: true,
    devl: true,
    usage: 'foo',
    examples: ['foo'],
    description: 'foo',
    async run (client, message, args) {
        await message.channel.send({content: 'bouton', components: [butttons]})
    },
    async runInteraction( client, interaction)  {
        await interaction.reply({ embeds: [welcomeEmbed], components: [butttons]})
    }
 }