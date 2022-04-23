import { BootClient, ClientEventBase } from "boot-client"
import { Guild, GuildMember, MessageActionRow, MessageButton, MessageEmbed, TextChannel, VoiceChannel, VoiceState } from "discord.js"

export default class Event extends ClientEventBase {
    constructor() {
        super({ name: "voiceStateUpdate" })
    }

    async execute(client: BootClient, oldState: VoiceState, newState: VoiceState) {
        if (newState.channel?.id != "965696734468661258" || newState.channel?.id == oldState.channel?.id) return;
        const member: GuildMember = newState.member as GuildMember
        const channel: TextChannel = client.channels.cache.get("965726788531671121") as TextChannel
        const embed = new MessageEmbed()
            .setAuthor({ name: "Welcome to the Karaoke channel!" })
            .setDescription("<<insert description here, not really my category innit>>")
            .setColor("LUMINOUS_VIVID_PINK")
            const components = [
                new MessageActionRow().addComponents([
                    new MessageButton().setLabel("I want to sing!").setCustomId("sing").setStyle("SECONDARY").setEmoji("🎤")
                ])
            ]
        channel.send({ content: `${member}`, embeds: [embed], components })
    }
}