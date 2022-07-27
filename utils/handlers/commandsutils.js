const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);
const logger = require('../logger');

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async (cmdFile) => {
      const cmd = require(cmdFile);
      
      if (!cmd.name) return logger.warn(`commands non chargée: pas de nom\nfichier -> ${cmdFile}`);

      if (!cmd.description && cmd.type != 'USER' ) return logger.warn(`commands non chargée: pas de description \nfichier -> ${cmdFile}`);

      if (!cmd.category) return logger.warn(`commands non chargée: pas de catégorie\nfichier -> ${cmdFile}`);
      
      if (!cmd.permissions) return logger.warn(`commands non chargée: pas de perm\nfichier -> ${cmdFile}`);

      if (cmd.ownerOnly == undefined) return logger.warn(`commands non chargée: dit si la commande est ownerOnly\nfichier -> ${cmdFile}`);

      if (cmd.devl == undefined) return logger.warn(`commands non chargée: dit si la commande est en dev\nfichier -> ${cmdFile}`);

      if (!cmd.usage) return logger.warn(`commands non chargée: pas d'usage donner\nfichier -> ${cmdFile}`);

      if (!cmd.examples) return logger.warn(`commands non chargée: pas d'exemple donné\nfichier -> ${cmdFile}`);

      cmd.permissions.forEach(permission => {
         if (!permissionList.includes(permission)){
            return logger.typo(`commande non exécutée: erreure de typo sur la permmission '${permission}'\nfichier -> ${cmdFile}`);
        }
      });

      client.commands.set(cmd.name, cmd);
      logger.command(`- ${cmd.name}`);
   });
};

const permissionList = ['CREATE_INSTANT_INVITE ', 'KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'PRIORITY_SPEAKER', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS ', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'VIEW_GUILD_INSIGHTS', 'CONNECT ', 'SPEAK ', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS_AND_STICKERS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_EVENTS', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS ', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES', 'MODERATE_MEMBERS']