const { runInteraction } = require("../moderation/ban");

module.exports = {
    name: 'kiss', 
    category: 'reaction',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'kiss [membre visé]',
    examples: ['kiss @materdpro'],
    description: 'embrassé quelqu\'un',
    async run(client, message, args) {
    message.channel.send('cette commande est uniquement disponible avec les /')
    },
    options: [
        {
            name: 'cible',
            description: 'personne que tu veux embrassé',
            type: 'USER',
            required: true,

        },
        {
            name: 'raison',
            description: "pourquoi tu veux l'embrassé",
            type: 'STRING',
            required: true,

        }
    ],
    async runInteraction (client, interaction, message) {
    const target = interaction.options.getMember('cible');
    const reason = interaction.options.getString('raison');

    interaction.reply(`${interaction.user.tag} a embrassé ${target} parce que ${reason} \n https://cdn.weeb.sh/images/SkKL3adPb.gif`)
    //target.send(`tu a été embrasser par ${interaction.user.tag} \n https://cdn.weeb.sh/images/SkKL3adPb.gif`)
    client.channels.cache.get('993525784956391504').send(`${interaction.user.tag} a embrassé ${target} pour la raison : ${reason}`);
  },
 };
