module.exports = {
    name: 'ban', 
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    devl: false,
    usage: 'ban [@utilisateur] [raison]',
    examples: ['ban @masterdpro car il a fait de la merd'],
    description: 'bannir un membre de se serveur',
    async run(client, message, args) {
        if (!args[0]) return message.reply('veuillez mantionner le membre a ban');
        if (!args[1]) return message.reply('veuillez mettre la raison du ban');

        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.bannable) return message.reply(`vous ne pouvez pas ban ${target} car il est plus haut rank que moi `);

        target.ban({reason});
        message.channel.send(`${target} a bien été ban du serveur`)
        target.send(`tu été ban comme raison : ${reason}`)
        client.channels.cache.get('993285160655130704').send(`${message.author.username} a banni ${target} pour la raison   : ${reason}`)
    },
    options: [
        {
            name: 'cible',
            description: 'personne que tu veux ban',
            type: 'USER',
            required: true,

        },
        {
            name: 'raison',
            description: "raison du ban",
            type: 'STRING',
            required: true,

        }
    ],
    async runInteraction (client, interaction) {
    const target = interaction.options.getMember('cible');
    const reason = interaction.options.getString('raison');

    if (!target.bannable) return interaction.reply(`vous ne pouvez pas ban ${target} car il est plus haut rank que moi `);

    target.ban({reason});
    interaction.reply(`${target} a bien été ban du serveur`)
    target.send(`tu été ban comme raison : ${reason}`)
    client.channels.cache.get('993252306114068671').send(`${interaction.user.tag} a banni ${target} pour la raison : ${reason}`);
  },
 };