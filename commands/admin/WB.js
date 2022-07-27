const { MessageEmbed, WebhookClient } = require('discord.js');

const { webhookId, webhookToken } = require('../../package.json');

const webhookClient = new WebhookClient({ url:'https://discord.com/api/webhooks/994759249840320593/EfDX1q6wb-JnOJOJ8XK1uxq_LQxRvzYTU_1lbRLB-KY4dHUp6w_dasS4dCSLxl2PyIx7'})

module.exports = {
    name: 'wb', 
    category: 'chute',
    permissions:['SEND_MESSAGES'], 
    ownerOnly: true,
    devl: true,
    usage: 'quarante-douze',
    examples: ['quarante-douze'],
    description: 'pour nevermind mon bebou',


    options :[
        {
            name: 'nom',
            description: 'le nom donner un WebHook',
            type: 'STRING',
            required: true,
        },
        {
            name: 'titre',
            description: 'titre donner au embed renvoier par plume',
            type: 'STRING',
            required: true,
        },
        {
            name: 'contenue',
            description: 'le contenue de ton embed',
            type: 'STRING',
            required: true,
        }
    ],
async runInteraction(client, interaction){

const nom = interaction.options.getString('nom'); 
const titre = interaction.options.getString('titre');   
const contenue = interaction.options.getString('contenue');   
const message = interaction.options.getString('message');   

const embed = new MessageEmbed()
    .setTitle(`${titre}`)
    .setDescription(`${contenue}`)
    .setColor('#0099ff');


webhookClient.send({
    username: `${nom}`,
    avatarURL: 'https://i.imgur.com/AfFp7pu.png',
    embeds: [embed],
});}
}