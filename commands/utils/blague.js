const BlaguesAPI = require('blagues-api');
const blagues = new BlaguesAPI('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzIyNDUwMzAzOTE5NTg3NDA5IiwibGltaXQiOjEwMCwia2V5IjoicjNwVUN0aUVXbG5lM0N2NE5RN0JQdUtYT1dpZ204QWRmbmZNVnBTTDEwUDh1d1V4ZTAiLCJjcmVhdGVkX2F0IjoiMjAyMi0wNy0xMVQxNToyNTowMiswMDowMCIsImlhdCI6MTY1NzU1MzEwMn0.uz05ziPQ45gEeWISBdwO-1pgiIv042qpPjXukF7j6c8');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'joke', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: true,
    usage: 'joke',
    examples: ['joke'],
    description: 'faire une blague',
   async run(client, message, args)  {
    message.channel.send('utilise les /')
    },
    
    async runInteraction(client, interaction) {

    const blague = await blagues.random()
    const ahah = blague.joke
    const reponse = blague.answer
    const type = blague.type
    const id = blague.id

    const embed = new MessageEmbed()
        .setTitle(`Blague sur le theme: ${type} `)
        .setDescription(` ${ahah} \n ${reponse}`)
         .setTimestamp()
         .setFooter({ 
             text: (`id de la blague: ${id}`),
             iconURL: interaction.user.displayAvatarURL()
        });

        interaction.reply({embeds: [embed]});
    }
    
    }