var fetch = require('node-fetch')
var handler = async (msg, { 
client, command
}) => {
var a = await fetch('https://raw.githubusercontent.com/Hyzerr/Database/master/Database/Random/' + command + '.json')
var b = await a.json()
var c = await Func.pickRandom(b)
msg.reply(c)
}
handler.tags = ['random']
handler.help = ['truth','dare']
handler.command = /^(truth|dare)$/i

module.exports = handler
