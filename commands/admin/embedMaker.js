module.exports = {
    name: 'embedmaker', 
    category: 'admin',
    permissions:['ADMINISTRATOR'],
    ownerOnly: true,
    devl: true,
    usage: 'tu ten sert pas',
    examples: ['lis bien'],
    description: 'sert a faire mes test',
    run(client, message, args)  {
      message.channel.send('le bot migre tranquilement vers les / commande, je tinvite a t\'en servire.')
    },
    
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
    
    
   }
    }
    
    