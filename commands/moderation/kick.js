module.exports = {
    name: 'kick', 
    category: 'moderation',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    devl: false,
    usage: 'kick [@utilisateur] [raison]',
    examples: ['kick @masterdpro car il a fait de la merd'],
    description: 'expuler un membre de se serveur',
    async run(client, message, args) {
        if (!args[0]) return message.reply('veuillez mantionner le membre a kick');
        if (!args[1]) return message.reply('veuillez mettre la raison du kick');

        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.kickable) return message.reply(`vous ne pouvez pas kick ${target} car il est plus haut rank que moi `);

        target.kick(reason);
        message.channel.send(`${target} a bien été kick du serveur`)
        target.send(`tu été kick comme raison : ${reason}`)
    },
    options: [
        {
            name: 'cible',
            description: 'personne que tu veux kick',
            type: 'USER',
            required: true,

        },
        {
            name: 'raison',
            description: "raison du kick",
            type: 'STRING',
            required: true,

        }
    ],
    async runInteraction (client, interaction) {
    const target = interaction.options.getMember('cible');
    const reason = interaction.options.getString('raison');

    if (!target.kickable) return interaction.reply(`vous ne pouvez pas kick ${target} car il est plus haut rank que moi `);

    target.kick(reason);
    interaction.reply(`${target} a bien été kick du serveur`)
    target.send(`tu été kick comme raison : ${reason}`)
  },
 };