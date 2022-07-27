const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'poll',
    category: 'user',
    permissions: ['ADMINISTRATOR'], 
    ownerOnly: false,
    devl: false,
    usage: 'poll [question du sondage]',
    examples: ['poll je suis beau ?'],
    description: 'poste ton sondage',
    async run(client, message, args)  {
      if (!args[0]) return message.reply("merci de mettre la question pour le sondage" );

      const embed = new MessageEmbed()
      .setTitle('sondage')
      .setColor('#E80310')
      .setDescription(args.slice(0).join(' '))
      .setFooter({ text: `nouveau sondage fait par ${message.author.tag}`});


  const poll = await message.reply({ embeds: [embed] })
  poll.react('<a:check:967947611468361728>');
  poll.react('<:croix:967950139413119086>');
    },
    options: [
        {
            name: "title",
            description:"mets le titre du sondage",
            type: "STRING" ,
            required: true,
        },
        {
            name: "content",
            description: "taper la question du sondage",
            type: "STRING",
            required: true,
        },
    ],
     async runInteraction(client, interaction)  {
        const pollTitle = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');
    
        const embed = new MessageEmbed()
            .setTitle(pollTitle)
            .setColor('#E80310')
            .setDescription(pollContent)
            .setFooter({ text: `nouveau sondage fait par ${interaction.user.tag}`});


        const poll = await interaction.reply({ embeds: [embed], fetchReply: true})
        poll.react('<a:check:967947611468361728>');
        poll.react('<:croix:967950139413119086>');  
    } 
 };
 //