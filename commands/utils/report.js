const { MessageActionRow, Modal, TextInputComponent, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');


module.exports = {
name: 'report', 
category: 'utils',
permissions:['SEND_MESSAGES'],
ownerOnly: false,
devl: false,
usage: "report",
examples: ["report et après je te laisse repondre au questions"],
description: 'moyen de report un utilisateur',
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
    .setLabel("quelle est l'id de la personne en question")
    .setRequired(true)
    .setPlaceholder("son ID ici")
    .setStyle('SHORT'))
     const questions2 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q2')
    .setLabel('quelle est la raison de ton report')
    .setRequired(true)
    .setPlaceholder('la raison...')
    .setStyle('SHORT'))
    const questions3 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q3')
    .setLabel('quelle est ton pseudo/ID')
    .setRequired(true)
    .setPlaceholder('ton pseudo/ID')
    .setStyle('SHORT'))
    const questions4 = new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent()
    .setCustomId('Q4')
    .setLabel('quelle serveur a t\il commie cette infraction')
    .setRequired(true)
    .setPlaceholder('met le lien et ou le nom du serveur')
    .setStyle('SHORT'))
    

    const Modal = new Discord.Modal()
    .setCustomId('test')
    .setTitle('report')
    .addComponents(questions1, questions2, questions3, questions4)
    
    await message.showModal(Modal)

    try {
        
        const response = await message.awaitModalSubmit({time: 100000})

        const Q1 = response.fields.getTextInputValue('Q1')
        const Q2 = response.fields.getTextInputValue('Q2')
        const Q3 = response.fields.getTextInputValue('Q3')
        const Q4 = response.fields.getTextInputValue('Q4')

        await response.reply({content: 'le warn a bien été fais on te tien au courant'})

        const Embed = new Discord.MessageEmbed()
        .setColor('#6b23e8')
        .setTitle(` ${Q1} a commit une infraction`)
        .addFields(
            {name: 'raison du report...', value: `${Q2}`, inline: false},
            {name: 'report fait par...', value: `${Q3}`, inline: false},
            {name: 'report fait sur le serveur..', value: `${Q4}`, inline: false},

        )
        .setFooter({ text: `nouveau report fait par ${message.user.tag}`})
         await client.channels.cache.get('986724748815904809').send({embeds: [Embed]})

    } catch (err)  {return;}
} }