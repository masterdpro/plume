module.exports = {
    name: 'clear', 
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'clear [nombres de message] <@utilisateur>',
    examples: ['clear 4 ', 'clear 5 @masterdpro'],
    description: 'suprimer un certain nombre de message',
    async run(client, message, args) {
        const amountToDelete = args[0];
        if (isNaN(amountToDelete)) return message.reply('Merci de mettre une nombre et non des lettres (en même temps quelle idée de mettre des lettres)')
        if (!args[0] || amountToDelete > 100 || amountToDelete < 2 ) return message.reply('veuillez mettre un nombre entre 1 et 100');
        const target = message.mentions.users.find(u => u.id);
        await message.delete();

        const messagesToDelete = await message.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
        });

        await message.channel.bulkDelete(filteredTargetMessages, true).then(messages =>{
            message.channel.send(`j'ai suprimer ${messages.size} messages de ${target}`);
            console.log(` ${messages.size} messages on été suprimer`)
        });
      } else {
        await message.channel.bulkDelete(amountToDelete, true).then(messages => {
            message.channel.send(`j'ai suprimer ${messages.size} messages de se salon`);
            console.log(` ${messages.size} messages on été suprimer`)
        });
      }
    },
    options: [
        {
            name: 'message',
            description: 'nombre de message a suprimer',
            type: 'NUMBER',
            required: true,

        },
        {
            name: 'cible',
            description: "choisire un utilisateur pour suprimer c'est messages",
            type: 'USER',
            required: false,

        }
    ],
    async runInteraction (client, interaction) {
        const amountToDelete = interaction.options.getNumber('message');
        if (amountToDelete > 100 || amountToDelete < 2 ) return interaction.reply('veuillez mettre un nombre entre 1 et 100')
        const target = interaction.options.getMember('cible');

        const messagesToDelete = await interaction.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
        });

        await interaction.channel.bulkDelete(filteredTargetMessages, true).then(message =>{
            interaction.reply(`j'ai suprimer ${message.size} messages de ${target}`);
            console.log(` ${message.size} messages on été suprimer`)
        });
      } else {
        await interaction.channel.bulkDelete(amountToDelete, true).then(message =>{
            interaction.reply(`j'ai suprimer ${message.size} messages de se salon`, message);
            console.log(` ${message.size} messages on été suprimer`)
        }); 
      }
     
    }
 };