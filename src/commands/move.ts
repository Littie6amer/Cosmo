import { BootClient, SlashCommandBase } from "boot-client"
import { CommandInteraction, CacheType, MessageEmbed, User, GuildMember, VoiceChannel } from "discord.js"

export default class SuggestCommand extends SlashCommandBase {
    constructor() {
        super({
            name: "move",
            description: "[ADMIN] Move members from one channel to another",
            options: [
                {
                    name: "from",
                    type: "CHANNEL",
                    description: "Where they should be moved from",
                    channel_types: ["GUILD_VOICE"],
                    required: true
                },
                {
                    name: "to",
                    type: "CHANNEL",
                    description: "Where they should be moved to",
                    channel_types: ["GUILD_VOICE"],
                    required: true
                },
            ]
        })
    }

    execute(client: BootClient, interaction: CommandInteraction) {
        const member = interaction.member as GuildMember;
        if (!member.roles.cache.get("794323627955716147")) return interaction.reply("You're not an admin!")
        const fromChannel = interaction.options.getChannel("from") as VoiceChannel;
        const toChannel = interaction.options.getChannel("to") as VoiceChannel;
        fromChannel.members.forEach((member: GuildMember) => {
            member.voice.setChannel(toChannel.id)
        })
        return interaction.reply({ content: `**Moved users in <#${fromChannel.id}> -> <#${toChannel.id}>**` })
    }
}