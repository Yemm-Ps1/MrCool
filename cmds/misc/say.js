const { VoiceChannel } = require('discord.js')
const Commando = require('discord.js-commando')
const path = require('path')
const Shell = require('node-powershell')
module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['s', 'speak'],
            group: 'misc',
            memberName: 'say',
            description: 'Says stuff.',
            argsType: 'multiple'
        })
    }
    async run(message, args) {
        const { voice } = message.member

        if(!voice.channelID) {
            message.reply('You must be in a voice channel.')
            return
        }
        //console.log(args)
        const ps = new Shell({
            executionPolicy: 'Bypass',
            noProfile: true
        })
        ps.addCommand(`. "C:\\Users\\Alex\\Documents\\git\\Discord Bot\\cmds\\misc\\makeaudio.ps1" -word ${args}`)
        ps.invoke()
        .then(output => {
            console.log(output);
          })
          .catch(err => {
            console.log(err);
          });
        await new Promise(resolve => setTimeout(resolve, 500))
        voice.channel.join().then((connection) => {
        connection.play(path.join(__dirname, `words/current.m4a`))
        })

    }
}