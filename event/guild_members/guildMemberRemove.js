const { MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove', 
    once: false,
   async execute(client, member){

        const embed = new MessageEmbed()
            .setAuthor({name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
            .setColor('#E929C9')
            .setDescription(`φ nom d'utilisateur: ${member.displayName}
            φ créé le : <t:${parseInt(member.user.createdTimestamp / 1000)}:f>  (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
            φ rejoins le: <t:${parseInt(member.joinedTimestamp / 1000)}:f>  (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
            φ quité le: <t:${parseInt(Date.now() / 1000)}:f>  (<t:${parseInt(Date.now() / 1000)}:R>)
            `)
            .setTimestamp()
            .setFooter({ text: 'la belle personne a quitté après un si beau moment ☻ '});
        
        const logChannel = client.channels.cache.get('970796880252534814');
        logChannel.send({ embeds: [embed] });
    },
 };