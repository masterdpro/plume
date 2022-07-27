module.exports = {
    name: 'servercount', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: true,
    devl: false,
    usage: 'servercount',
    examples: ['servercount'],
    description: 'sert a voire le nombre de serveur ou je me trouve',
    runInteraction(client, interaction) {
        interaction.reply(`je suis sur ${client.guilds.cache.size} serveurs`)
    }
    
    }