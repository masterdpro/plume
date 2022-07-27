const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category: 'user',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: "clique droit sur le profile d'une personne, ensuite va dans application, et il va y avoir userinfo",
    examples: ['^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^'],
    type: 'USER',
    async run( client, message, args)  {  
        message.reply(`commande est disponible avec les application \n https://im2.ezgif.com/tmp/ezgif-2-62a2939b14.gif`);
    },

    async runInteraction( client, interaction)  {  
        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://cdn.discordapp.com/attachments/964671914394152961/973723463858671726/Sans_titre_5.png' : 'https://cdn.discordapp.com/attachments/964671914394152961/973724181315330129/Sans_titre_6.png' })
            .setColor('#1823c4')
            .setImage(member.user.displayAvatarURL())
            .addFields(
                {name: 'nom/pseudo', value: `${member.displayName}`, inline: true},
                {name: 'modo', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },
                {name: 'bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true },
                {name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}`},
                {name: 'compte créé le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>  (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)` },
                {name: 'est arriver le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>  (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)` },
            )

        interaction.reply({ embeds: [embed], ephemeral: true });
    }
 }