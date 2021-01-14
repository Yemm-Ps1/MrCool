const Commando = require('discord.js-commando')
const config = require('@root/config.json')





const client = new Commando.CommandoClient({
    owner: '220695488540835850',
    commandPrefix: config.prefix
})

client.on('ready', async () => {
    console.log('The client is ready.')
    
    
})