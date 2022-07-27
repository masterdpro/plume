const { MessageEmbed} = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const prefix = '!';

const contextdescription = {
  userinfo: 'donne les info sur un utilisateur'
}

module.exports = {
    name: 'plume',
    category: 'user',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'plume <nom de commande>',
    examples: ['plume date'],
    description: 'cmd help',
    async run(client, message, args)  {
      if (!args.length) {
          const noArgsEmbed = new MessageEmbed()
          .setColor('#6b23e8')
          .addField('Liste des commandes disponibles', `Une liste de tout les catégories et leurs commandes.\nPour plus d'informacions sur une commande, tapez \`${prefix}plume <command>\``)

        for (const category of commandFolder) {
            noArgsEmbed.addField(
                `${category.toUpperCase()}`,
                `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
            );
            }
        

        return message.channel.send({ embeds: [noArgsEmbed]});
      }

      const cmd = client.commands.get(args[0])
      if (!cmd) return message.reply("cette commande n'existe pas");
      
      return message.channel.send(`
\`\`\`makefile
[aide: commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ pour ploume ploume#4434 uniquement /!\\  ': ' '}

${cmd.description ? cmd.description : contextdescription[`${cmd.name}` ]}

Permissions: ${cmd.permissions.join(', ')}
Utitilisation: ${prefix}${cmd.usage}
Exemple: ${prefix}${cmd.examples.join(` | ${prefix}`)}

---

${prefix} = prefix utiliser pour le bot (commande avec le / son aussie disponibles)
{} = sous-commande(s) | [] = options oubligatoires | <> = options potentiel
ne pas inclure ces caractère -> {}, [] et <> dans vos commandes
\`\`\``);
    },
    options: [
        {
            name: "commands",
            description:"tappez le nom de votre commande",
            type: "STRING" ,
            required: false
        }
    ],
     async runInteraction(client, interaction, )  {
        const cmdName = interaction.options.getString('commands');


        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
            .setColor('#6b23e8')
            .addField('Liste des commandes disponibles', `Une liste de tout les catégories et leurs commandes.\nPour plus d'informacions sur une commande, tapez \`${prefix}plume <command>\``)
  
          for (const category of commandFolder) { 
              noArgsEmbed.addField(
                  `${category.toUpperCase()}`,
                  `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
              );
            }
          
  
          return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
        }
  
        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({content: "cette commande n'existe pas", ephemeral: true});
      
        return interaction.reply({content :`
\`\`\`makefile
[aide: commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ pour ploume ploume#4434 uniquement /!\\  ': ' '}
        
${cmd.description ? cmd.description : contextdescription[`${cmd.name}` ]}
        
Permissions: ${cmd.permissions.join(', ')}
Utitilisation: ${prefix}${cmd.usage}
Exemple: ${prefix}${cmd.examples.join(` | ${prefix}`)}
        
---
        
${prefix} = prefix utiliser pour le bot (commande avec le / son aussie disponibles)
{} = sous-commande(s) | [] = options oubligatoires | <> = options potentiel
ne pas inclure ces caractère -> {}, [] et <> dans vos commandes
\`\`\``, });

    } 
 };
