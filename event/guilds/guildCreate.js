const {Guild } = require('../../models/index');
const logger = require('../../utils/logger');



module.exports = {
    name: 'guildCreate', 
    once: false,
    async execute(client, guild){
       const createGuild = await new Guild({ id: guild.id, name: guild.name });
       createGuild.save().then(g => logger.client(`nouveau serveur (${ g.id})`) );


    }
 };  