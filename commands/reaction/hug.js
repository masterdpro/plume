const { runInteraction } = require("../moderation/ban");

module.exports = {
    name: 'hug', 
    category: 'reaction',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'hug [membre visé]',
    examples: ['hug @materdpro'],
    description: 'donner un callin quelqu\'un',
    async run(client, message, args) {
    message.channel.send('cette commande est uniquement disponible avec les /')
    },
    options: [
        {
            name: 'cible',
            description: 'personne que tu veux calliner',
            type: 'USER',
            required: true,

        },
        {
            name: 'raison',
            description: "raison du callin",
            type: 'STRING',
            required: true,

        }
    ],
    async runInteraction (client, interaction, message) {
    const target = interaction.options.getMember('cible');
    const reason = interaction.options.getString('raison');

    interaction.reply(`${interaction.user.tag} a donner un callin a ${target} car... ${reason} \n https://cdn.weeb.sh/images/ryMqdOXvZ.gif`)
    client.channels.cache.get('993525784956391504').send(`${interaction.user.tag} a donner un calin a ${target} pour la raison : ${reason}`);
  },
 };
