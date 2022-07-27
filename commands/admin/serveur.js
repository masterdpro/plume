module.exports = {
    name: 'serveur', 
    category: 'cacher',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    devl: false,
    usage: 'seveur',
    examples: ['serveur'],
    description: 'ou le bot est',
    run (client, message, args, each) {
    message.channel.send("tu n'a peut-être pas les permissions pour faire cette commande. \n si oui va voir dans <#970796880252534814> ")

    const salonlog = client.channels.cache.get('970796880252534814');
    client.guilds.cache.each(g => {salonlog.send(g.name, g.id)})

    }
}