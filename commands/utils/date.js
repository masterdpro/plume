const dayjs = require('dayjs');
const { runInteraction } = require('../user/plume');



module.exports = {
    name: 'date',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'date',
    examples: ['date'],
    description: "permet d'avoir l'heure et la date",

    run(client ,message, args) {
       message.channel.send(`la date est : ${dayjs().format('DD/MM/YYYY')} et il est ${dayjs().format('HH:mm:ss')} `)
    },
    runInteraction(client, interaction ) {
        interaction.channel.send(`la date est : ${dayjs().format('DD/MM/YYYY')} et il est ${dayjs().format('HH:mm:ss')}`)
    }
}