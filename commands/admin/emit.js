module.exports = {
    name: 'emit', 
    category: 'cacher',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    devl: false,
    usage: 'emit []',
    examples: ['emit GuildMemberJoin'],
    description: 'emettre un event au choix',
    run(client, message, args) {
      if (!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove)$/)) return message.reply('merci de mettre un event valide (\`guildMemberAdd\`/\`guildMemberRemove\`)');

      if (args[0] == 'guildMemberAdd') {
        client.emit('guildMemberAdd', message.member);
        message.reply('Event guildMemberAdd emit')
    } else if (args[0] == 'guildCreate')  {
        client.emit('guildCreate', message.guild);
        message.reply('Event guildCreate emit')
    } else {
        client.emit('guildMemberRemove', message.member);
        message.reply('Event guildMemberRemove emit')

    }
    },
    options: [
        {
            name: 'event',
            description: 'choisire un event a emettre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value:'guildMemberRemove'
                },
                {
                    name: 'guildCreate',
                    value:'guildCreate'
                },
            
            ]

        }
    ],
    runInteraction (client, interaction) {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAdd emit', ephemeral: true  });
        } else if (evtChoices == 'guildCreate')  {
            client.emit('guildCreate', interaction.guild);
            interaction.reply({ content: 'Event guildCreate emit', ephemeral: true  });
        } else {
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove emit', ephemeral: true  });

        }
        
    }
 };