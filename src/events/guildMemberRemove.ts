import { BootClient, ClientEventBase } from "boot-client"
import { Guild, GuildMember, TextChannel, VoiceChannel } from "discord.js"

export default class Event extends ClientEventBase {
    constructor () {
        super({ name: "guildMemberRemove" })
    }

    async execute(client: BootClient, member: GuildMember) {
        if (member.guild.id != "794313251185098782") return;
    }
}