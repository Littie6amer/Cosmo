import { BootClient, SlashCommandBase } from "boot-client"
import { CommandInteraction, CacheType, MessageEmbed, User, GuildMember, VoiceChannel, Message } from "discord.js"

export default class SingCommand extends SlashCommandBase {
    constructor() {
        super({
            name: "sing",
            description: "Sing in the karaoke channel!"
        })
    }

    execute(client: BootClient, interaction: CommandInteraction<CacheType>): any {
        // const member = await interaction.guild?.members.fetch(interaction.member.id);
        // return interaction.reply(`\`\`\`${JSON.stringify(member?.voice)}\`\`\``)
    }
}