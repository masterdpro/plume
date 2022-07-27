module.exports = {
    name: 'voc', 
    category: 'user',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: true,
    usage: 'voc',
    examples: ['voc'],
    description: 'cette commande sera bientôt disponible. ',
    run (client, message, args, each) {
    message.channel.send('sa arrive bientot')
    }
}