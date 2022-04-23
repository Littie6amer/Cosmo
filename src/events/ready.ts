import { BootClient, ClientEventBase } from "boot-client"
import { Guild, VoiceChannel } from "discord.js"
import { joinVoiceChannel } from "@discordjs/voice"

export default class Event extends ClientEventBase {
    constructor() {
        super({ name: "ready" })
    }

    async execute(client: BootClient, ...data: any[]) {
        client.user?.setPresence({
            activities: [{
                type: "LISTENING",
                name: "furious typing"
            }]
        })
        const guild = client.guilds.cache.get("794313251185098782") as (Guild | undefined)
        const members = await guild?.members.fetch()
        const memberCountChannel = client.channels.cache.get("959817177924505651") as (VoiceChannel | undefined)
        const onlineCountChannel = client.channels.cache.get("959817263987445880") as (VoiceChannel | undefined)
        const theVC = client.channels.cache.get("954452250774863883") as (VoiceChannel | undefined)
        memberCountChannel?.setName(`Members: ${members?.size}`)
        onlineCountChannel?.setName(`Online: ${members?.filter(m => !["offline", "invisible", undefined].includes(m.presence?.status)).size}`)
        const connection = theVC ? joinVoiceChannel({
            channelId: theVC.id,
            guildId: theVC.guild.id,
            adapterCreator: theVC.guild.voiceAdapterCreator,
        }) : null
        setTimeout(() => {
            memberCountChannel?.setName(`Members: ${members?.size}`)
            onlineCountChannel?.setName(`Online: ${members?.filter(m => !["offline", "invisible", undefined].includes(m.presence?.status)).size}`)
        }, 1800000)
        client.slashCommandManager._inDev_Deploy("suggest", "794313251185098782")
    }
}