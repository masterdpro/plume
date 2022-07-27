const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'quarante-douze', 
    category: 'membres',
    permissions:['SEND_MESSAGES'], 
    ownerOnly: false,
    devl: false,
    usage: 'quarante-douze',
    examples: ['quarante-douze'],
    description: 'pour nevermind mon bebou',
    async run(client, message, args)  {
        const embed = new MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/avatars/718153760651608118/463ad8f11c6df69d4ec728bb80e95e80.webp?size=1024')
        .setURL('https://www.youtube.com/watch?v=iik25wqIuFo')
        .setTitle('UwU')
        .setDescription('||nervermind#4256 le meilleur :)||')
        .setFooter({ text: 'nevermind', iconURL: 'https://cdn.discordapp.com/avatars/718153760651608118/463ad8f11c6df69d4ec728bb80e95e80.webp?size=1024' });
       const nevermind = await message.channel.send({ embeds: [embed] });
       nevermind.react('😻');
    },
    async runInteraction (client, interaction)  {
        const embeda = new MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/avatars/718153760651608118/463ad8f11c6df69d4ec728bb80e95e80.webp?size=1024')
        .setURL('https://www.youtube.com/watch?v=iik25wqIuFo')
        .setTitle('UwU')
        .setFooter({ text: 'nevermind', iconURL: 'https://cdn.discordapp.com/avatars/718153760651608118/463ad8f11c6df69d4ec728bb80e95e80.webp?size=1024' });
        const never = await interaction.reply({ embeds: [embeda], fetchReply: true });
        never.react('😻');
    }
 };