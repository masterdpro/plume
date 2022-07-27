

module.exports = {
    name: '8ball', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: true,
    usage: '8ball [ta question]',
    examples: ['8ball [je suis beau]'],
    description: 'donner des reponses',
   async run(client, message, args)  {
    message.channel.send('utilise les /')
    },
    
        options: [
            {
                name: 'question',
                description: 'question a la quelle tu veux que je reponde',
                type: 'STRING',
                required: true,
    
            }
        ],
        async runInteraction (client, interaction) {
        const target = interaction.options.getString('question');
    
        //const eightball = require('8ball')()
        let replies = ["oui.", "non.", "j'sais pas.", "redemande plus tard.", "sa m'étonnerai", "assurément.", "eeehh", "j'sais pas moi", "bah non !"];
        let result = Math.floor((Math.random() * replies.length));    

        interaction.reply(`question: ${target} \n reposne: ${replies[result]}`)
        
    }
    
    }