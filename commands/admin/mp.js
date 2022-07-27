module.exports = {
    name: 'mp', 
    category: 'admin',
    permissions:['ADMINISTRATOR'],
    ownerOnly: false,
    devl: false,
    usage: 'mp [membre] [le message]',
    examples: ['mp @masterdpro ta fais des conneries '],
    description: 'utile pour contacter des membre anonymement',

    async run (client, message, args) {
        if (!args[0]) return message.reply('stp dit moi a qui tu veux envoyer le message');
        if (!args[1]) return message.reply('stp dit moi quelle message tu veux envoyer');

        const target = message.mentions.members.find(m => m.id);
        const chose = args.slice(1).join(' ');
        const sender = message.author.id;
        

         target.send(`${chose}`);
         const salonlog = client.channels.cache.get('986020104426881095'); 
         salonlog.send(`<@${sender}> ma fait envoyer un message a ${target} les message est \n ${args[1]} `)
         message.channel.send('message envoyé chef');
         message.delete(args.slice(0).join(' ') )
         console.log(`<@${sender}> ma fait envoyer un message a ${target} les message est \n ${args[1]} `)
        
         
    },
    options: [
        {
            name: 'cible',
            description: 'personne que tu veux ban',
            type: 'USER',
            required: true,

        },
        {
            name: 'message',
            description: "message a envoyer",
            type: 'STRING',
            required: true,

        }
    ],
    async runInteraction (client, interaction) {
    const target = interaction.options.getMember('cible');
    const reason = interaction.options.getString('message');

    interaction.reply(`${target} a bien reçu le message`)
    target.send(`${reason} \n envoyer par: <@${interaction.user.id}>`)
    client.channels.cache.get('993252306114068671').send(`${interaction.user.tag} a banni ${target} pour la raison : ${reason}`);
  },
 };
   