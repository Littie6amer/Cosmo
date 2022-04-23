import { BootClient, SlashCommandBase } from "boot-client";
import { CommandInteraction, CacheType, GuildMember } from "discord.js";

export default class MessageText extends SlashCommandBase {
    constructor() {
        super({
            name: "text",
            description: "Make a spikey send a message!",
            options: [
                {
                    name: "content",
                    description: "What spikey should say.",
                    type: "STRING",
                    required: true
                }
            ]
        })
    }

    async execute(client: BootClient, interaction: CommandInteraction<CacheType>): Promise<any> {
        const member = interaction.member as GuildMember;
        if (!member?.roles.cache.get("794323627955716147")) return;
        return interaction.reply(`${interaction.options.getString("content")}`)
    }
}