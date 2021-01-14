const { VoiceChannel } = require('discord.js')
const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'code',
            group: 'misc',
            memberName: 'code',
            description: 'Reads out code.'
        })
    }
    async run(message, args) {
        const { voice } = message.member

        if(!voice.channelID) {
            message.reply('You must be in a voice channel.')
            return
        }
        console.log(args)
        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, `unphonetic/${args}.m4a`))
        })
        

    }
}