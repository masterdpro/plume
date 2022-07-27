
const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'guildMemberAdd', 
    once: false,
   async execute(client, member){

        const embed = new MessageEmbed()
            .setAuthor({name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
            .setColor('#7837E2')
            .setDescription(`φ nom d'utilisateur: ${member}
            φ créé le : <t:${parseInt(member.user.createdTimestamp / 1000)}:f>  (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
            φ rejoins le: <t:${parseInt(member.joinedTimestamp / 1000)}:f>  (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
            `)
            .setTimestamp()
            .setFooter({ text: 'la belle personne a rejoint'});
        
        const logChannel = client.channels.cache.get('970796880252534814');
        logChannel.send({ embeds: [embed] });
    },
 };