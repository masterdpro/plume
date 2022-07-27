module.exports = {
    name: 'event',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: true,
    usage: 'event',
    examples: ['event'],
    description: "permet de voir un event presant",

    run(client ,message, args) {
       message.channel.send(`event presant... \n **code mistere** \n quelque commandes vont pouvoire de donner des indice sur le code secret... une fois que tu la trouver envoie le code secret a MasterDPro#4434 ^^ `)
    },
    runInteraction(client, interaction ) {
        interaction.channel.send({content:`event presant... \n **code mistere** \n quelque commandes vont pouvoire de donner des indice sur le code secret... une fois que tu la trouver envoie le code secret a MasterDPro#4434 ^^ `, ephemeral: true})
    }
}