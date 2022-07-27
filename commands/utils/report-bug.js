const { MessageActionRow, Modal, TextInputComponent, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const dayjs = require('dayjs');


module.exports = {
name: 'report-bug', 
category: 'utils',
permissions:['SEND_MESSAGES'],
ownerOnly: false,
devl: false,
usage: "report-bug",
examples: ["report-bug le bot est moche "],
description: 'sert a report un bug presant sur plume ',
async run(client, message, args) {
    
    if(message.author) return message.reply('utilise les slash commande')
    
    const questions1 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('test3')
    .setLabel('test4')
    .setRequired(true)
    .setPlaceholder('test5')
    .setStyle('SHORT'))

    const Modal = new Discord.Modal()
    .setCustomId('test')
    .setTitle('test2')
    .addComponents(questions1)
    
    await message.showModal(Modal)
},

async runInteraction(client, message, interaction, args) {
    
    const questions1 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q1')
    .setLabel("quelle est la commande ou le bug est présant")
    .setRequired(true)
    .setPlaceholder("nom de la commandes...")
    .setStyle('SHORT'))
     const questions2 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q2')
    .setLabel('l\'erreur en questions')
    .setRequired(true)
    .setPlaceholder('décrit l\'erreur en questions...')
    .setStyle('SHORT'))

    

    const Modal = new Discord.Modal()
    .setCustomId('test')
    .setTitle('report')
    .addComponents(questions1, questions2)
    
    await message.showModal(Modal)

    try {
        
        const response = await message.awaitModalSubmit({time: 100000})

        const Q1 = response.fields.getTextInputValue('Q1')
        const Q2 = response.fields.getTextInputValue('Q2')


        await response.reply({content: 'bug report avec succès '})

        const Embed = new Discord.MessageEmbed()
        .setColor('#6b23e8')
        .setTitle(`nouveau bug trouver par ${message.user.tag}`)
        .addFields(
            {name: 'bug présant sur la commande:', value: `${Q1}`, inline: false},
            {name: 'le bug est:', value: `${Q2}`, inline: false}
        )
        .setFooter({ text: `${dayjs().format('DD/HH:mm')}`})
         await client.channels.cache.get('993209867806449664').send({embeds: [Embed]})

    } catch (err)  {return;}
} }