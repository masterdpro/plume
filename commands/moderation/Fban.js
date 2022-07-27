

module.exports = {
    name: 'fban', 
    category: 'utils',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    devl: false,
    usage: 'ban [@utilisateur] [raison]',
    examples: ['ban @masterdpro car il a fait de la merd'],
    description: 'ban un membre |faut garder le secret|| ',
    async run(client, message, args) {
        if (!args[0]) return message.reply('veuillez mantionner le membre a ban');
        if (!args[1]) return message.reply('veuillez mettre la raison du ban');

        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');


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

    interaction.reply(`${target} a bien été ban du serveur comme raison: ${reason}`)
    target.send(`tu été ban comme raison : ${reason} \n ||stresse pas mon ami(e), tu a simplement été Fake ban||`)
    client.channels.cache.get('993252306114068671').send(`${interaction.user.tag} a banni ${target} pour la raison : ${reason}`);
  },
 };