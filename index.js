//const Discord = require('discord.js');
//const client = new Discord.Client();

const path = require('path')
const Commando = require('discord.js-commando')

const config = require('./config.json')
const { Message } = require('discord.js')



const client = new Commando.CommandoClient({
  owner: '220695488540835850',
  commandPrefix: config.prefix,
})

client.on('ready', async () => {
  console.log('The client is ready!')
  
  client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})

client.on('messageUpdate', async (oldMessage, newMessage) =>{
  //console.log(oldMessage.content, newMessage.content)
  //if(!oldMessage.author.id === '220695488540835850'){
  oldMessage.channel.send(oldMessage.author.username + " just edited their message like a bozo.\nOld Message: " + oldMessage.content + "\nNew Message: " + newMessage.content + "\nHow embarassing.")
  //}
})

client.login(config.token)