const weather = require('weather-js');
 
 module.exports = {
    name: 'temp', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'ping',
    examples: ['ping'],
    description: 'commande pour obtenir la latence du bot',
    async run (client, message, args) {

    },
    async runInteraction( client, interaction)  { 
       

// Options:
// search:     location name or zipcode
// degreeType: F or C

interaction.reply(`${weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
})}`)
    }
 }