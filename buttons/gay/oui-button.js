const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'oui', 
    async runInteraction( client, interaction)  {

        const embed = new MessageEmbed()
        .setTitle('on t\'accesptes comme tu es')
        .setDescription('Un gay (ou gai au Québec) est un homme homosexuel, c\'est-à-dire qui a une attirance amoureuse ou sexuelle exclusivement pour des hommes, du point de vue du sexe ou du genre \n On utilise parfois au Québec l\'écriture francisée gai1. En anglais et bien plus rarement en français, le terme gay (ou au Québec sa variante gaie3) peut également être employé pour désigner une personne homosexuelle en général, voire précisément une lesbienne. \n Le mot « gay » est utilisé en anglais à partir du xiie siècle, venant du vieux français « gai », très probablement dérivant d\'une origine germanique4. Pour l\'essentiel, le sens premier du mot est « joyeux », « sans souci », et le mot est très couramment utilisé en ce sens dans les discours et la littérature. Par exemple, l\'optimisme des années 1890 est encore souvent dénommé, en anglais, « Gay Nineties ». Le titre d\'un ballet français, la Gaîté parisienne (1938) de Manuel Rosenthal sur des thèmes d\'Offenbach, illustre également cette connotation. Dès le xviie siècle, le terme gay est employé pour désigner ce qui a trait aux distractions et plaisirs immoraux, avant d\'être associé au xixe siècle à la prostitution5.  ')
        .setThumbnail('https://cdn.discordapp.com/attachments/932842971169173514/995821978923577415/Gay_Pride_Flag.svg.png')
    
        await interaction.reply({embeds: [embed]})
     }
 };