const ownerId = '722450303919587409';

module.exports = {
    name: 'interactionCreate', 
    once: false,
    async execute(client, interaction){
      if (interaction.isCommand() || interaction.isContextMenu()) {
          const cmd = client.commands.get(interaction.commandName);
          if (!cmd) return interaction.reply('commande existe pas');

          if (cmd.ownerOnly) {
            if (interaction.user.id != ownerId) return message.reply('seulement <@722450303919587409> a accès a cette commande \n si tu a besoin d\aide envoie lui un message');
        }

          if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content:`malheureusement tu n'a pas la/les permission pour faire cette commande ): tu a besoin de (\`${cmd.permissions.join(', ')}\`)`, ephemeral:true});

          cmd.runInteraction(client, interaction);
          console.log(`${interaction.user.id} a fais la commande:${interaction}`)
      } else if (interaction.isButton()){
        const btn = client.buttons.get(interaction.customId);
          if (!btn) return interaction.reply('se boutton existe pas');
          btn.runInteraction(client, interaction);
      }
    },
}