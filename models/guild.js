const mongoose = require('mongoose');

const guildShema = mongoose.Schema( {
    id: String,
    prefix: { 'type': String,  'default': '!' },
    logChannel: { 'type': String,  'default': '970796880252534814' },
});

module.exports = mongoose.model('Guild', guildShema)