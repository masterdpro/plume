const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'ping',
    examples: ['ping'],
    description: 'commande pour obtenir la latence du bot',
    async run (client, message, args) {
        const tryPong = await message.channel.send('peut-être ?.. attend sa charge sois patient')
 

        const embed = new MessageEmbed().setURL('https://pastebin.com/3EWn28Ae')
        .setTitle('oui?')
        .setURL('https://pastebin.com/3EWn28Ae')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name:'latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
            { name:'latence bot', value: `\`\`\`${tryPong.createdTimestamp - message.createdTimestamp}ms\`\`\``, inline: true  }
         )
         .setTimestamp()
         .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL()});

        tryPong.edit({ content: ' ', embeds: [embed] });
    },
    async runInteraction( client, interaction)  {  
        const tryPong = await interaction.reply({ content: 'peut-être ?.. attend sa charge sois patient', fetchReply: true });
        const mcount = (`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)

        const embed = new MessageEmbed()
        .setTitle('oui?')
        .setURL('https://pastebin.com/3EWn28Ae')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name:'latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
            { name:'latence bot', value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true  },

         )
         .addFields(
             {name:'nombre de personne espionné', value: `\`\`\`${mcount} personnes\`\`\``  },
            {name:'nombre de serveur ou est le bot', value: `\`\`\`${client.guilds.cache.size} serveurs\`\`\``, inline: true},
           
         )
         .setTimestamp()
         .setFooter({ 
             text: interaction.user.username,
             iconURL: interaction.user.displayAvatarURL()
        });

        
        interaction.editReply({ content: 'attend', embeds: [embed] });
    }
 }