const { MessageActionRow, Modal, TextInputComponent, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');


module.exports = {
name: 'propsition', 
category: 'utils',
permissions:['SEND_MESSAGES'],
ownerOnly: false,
devl: false,
usage: "propsition",
examples: ["propsition et après je te laisse repondre au questions"],
description: 'propose des idée de commandes pour plume-bot',
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

async runInteraction(client, message, args) {
    
    const questions1 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q1')
    .setLabel('quelle est ton pseudo(et tag)')
    .setRequired(false)
    .setPlaceholder("si tu veux tu peux rester anonyme donc tu n'es pas oubliger de le mettre")
    .setStyle('SHORT'))
     const questions2 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q2')
    .setLabel('le nom de ta commande')
    .setRequired(true)
    .setPlaceholder('mets le ici ;)')
    .setStyle('SHORT'))
    const questions3 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q3')
    .setLabel('décrit nous ta commande')
    .setRequired(true)
    .setPlaceholder('mets le ici ;)')
    .setStyle('SHORT'))


    const Modal = new Discord.Modal()
    .setCustomId('test')
    .setTitle('nouvelle commande')
    .addComponents(questions1, questions2, questions3)
    
    await message.showModal(Modal)

    try {
        
        const response = await message.awaitModalSubmit({time: 100000})

        const Q1 = response.fields.getTextInputValue('Q1')
        const Q2 = response.fields.getTextInputValue('Q2')
        const Q3 = response.fields.getTextInputValue('Q3')

        await response.reply({content: 'propsition a été fais merci ;)'})

        const Embed = new Discord.MessageEmbed()
        .setColor('#6b23e8')
        .setTitle(`porposition fais par ${Q1}`)
        .addField("nom de la commande", `${Q2}`)
        .addField("description de la commande", `${Q3}`)

         await client.channels.cache.get('986724661951860856').send({embeds: [Embed]})

    } catch (err)  {return;}
} }