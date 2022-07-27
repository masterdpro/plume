const { MessageActionRow, MessageButton  } = require('discord.js');

const butttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
           .setCustomId('primary-button')
           .setLabel('primary')
           .setStyle('PRIMARY'),

        new MessageButton()
           .setCustomId('secondary-button')
           .setLabel('secondary')
           .setStyle('SECONDARY'),

        new MessageButton()
           .setCustomId('succes-button')
           .setLabel('succes')
           .setStyle('SUCCESS'),

        new MessageButton()
           .setCustomId('danger-button')
           .setLabel('danger')
           .setStyle('DANGER'),

        new MessageButton()
           .setURL('https://www.google.ca/maps/@48.4133869,-71.0480674,12z?hl=fr')
           .setLabel('link')
           .setStyle('LINK'),

    )

module.exports = {
    name: 'foo', 
    category: 'cacher',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
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