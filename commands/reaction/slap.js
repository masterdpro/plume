const { runInteraction } = require("../moderation/ban");

module.exports = {
    name: 'slap', 
    category: 'reaction',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'slap [membre visé]',
    examples: ['slap @materdpro'],
    description: 'claquer quelqu\'un',
    async run(client, message, args) {
    message.channel.send('cette commande est uniquement disponible avec les /')
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
    async runInteraction (client, interaction, message) {
    const target = interaction.options.getMember('cible');
    const reason = interaction.options.getString('raison');

    interaction.reply(`${interaction.user.tag} a claqué ${target} parce que ${reason} \n https://cdn.weeb.sh/images/H16aQJFvb.gif`)
    client.channels.cache.get('993525784956391504').send(`${interaction.user.tag} a slap ${target} pour la raison : ${reason}`);
  },
 };
