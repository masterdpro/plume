const { MessageActionRow, MessageButton  } = require('discord.js');

const butttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
           .setCustomId('oui')
           .setLabel('oui')
           .setStyle('DANGER'),

        new MessageButton()
           .setCustomId('oui1')
           .setLabel('OUI')
           .setStyle('DANGER'),

           new MessageButton()
           .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
           .setLabel('🏳‍🌈')
           .setStyle('LINK'),

        new MessageButton()
           .setCustomId('un-peu')
           .setLabel('un peu')
           .setStyle('DANGER'),

           new MessageButton()
           .setCustomId('UwU')
           .setLabel('UwU')
           .setStyle('DANGER'),

    )

module.exports = {
    name: 'gaytest', 
    category: 'cacher',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: true,
    usage: 'foo',
    examples: ['foo'],
    description: 'foo',
    async run (client, message, args) {
        await message.channel.send({content: 'bouton', components: [butttons]})
    },
    async runInteraction( client, interaction)  {
        await interaction.reply({content: 'bouton', components: [butttons]})
    }
 }