const { MessageEmbed } = require('discord.js');
const {MessageModal } = require('discord.js');

module.exports = {
name: 'test', 
category: 'cacher',
permissions:['ADMINISTRATOR'],
ownerOnly: true,
devl: true,
usage: 'tu ten sert pas',
examples: ['lis bien'],
description: 'sert a faire mes test',
run(client, message, args)  {
  
},

runInteraction(client, interaction) {
const say = interaction.options.getMember('cible');
}

}