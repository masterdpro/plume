const { MessageEmbed, WebhookClient } = require('discord.js');

const { webhookId, webhookToken } = require('../../package.json');

const webhookClient = new WebhookClient({ url:'https://discord.com/api/webhooks/994759249840320593/EfDX1q6wb-JnOJOJ8XK1uxq_LQxRvzYTU_1lbRLB-KY4dHUp6w_dasS4dCSLxl2PyIx7'})

module.exports = {
    name: 'wbc', 
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
            name: 'pp',
            description: 'pp donner au embed renvoier par plume',
            type: 'STRING',
            required: true,
        },
        {
            name: 'id',
            description: 'pp donner au embed renvoier par plume',
            type: 'STRING',
            required: true,
        }
    ],
async runInteraction(client, interaction){


const nom = interaction.options.getString('nom');    
const id = interaction.options.getString('id');   
const channel = client.channels.cache.get(`${id}`)



channel.createWebhook(`${nom}`, {
    avatar:   `https://cdn.discordapp.com/attachments/812135135422971984/994950203641712670/Sans_titre_12.png`,
    reason: 'Needed a cool new Webhook'
},

('ready', async () => {
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.find(wh => wh.token);

		if (!webhook) {
			return console.log('No webhook was found that I can use!');
		}

		await webhook.send({
			content: 'Webhook test',
			username: 'some-username',
			avatarURL: 'https://i.imgur.com/AfFp7pu.png',
			embeds: [embed],
		});
	} catch (error) {
		console.error('Error trying to send a message: ', error);
        
	}
    console.log(`${webhook}`)
}),

)}
};
