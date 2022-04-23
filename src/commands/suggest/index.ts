import { BootClient, SlashCommandBase } from "boot-client"
import { CommandInteraction, CacheType, MessageEmbed, User, GuildMember } from "discord.js"

export default class SuggestCommand extends SlashCommandBase {
    constructor() {
        super({
            name: "suggest",
            description: "Suggest a way to improve Cactus Galactus.",
            options: [
                {
                    name: "content",
                    type: "STRING",
                    description: "How can we improve Cactus Galactus?",
                    required: true
                },
                {
                    name: "category",
                    type: "STRING",
                    description: "What category would you place this suggestion in?",
                    required: true,
                    choices: [
                        { name: "Community", value: "Community", type: "STRING" },
                        { name: "Arts & Crafts", value: "Arts & Crafts", type: "STRING" },
                        { name: "Debating", value: "Debating", type: "STRING" },
                        { name: "Food", value: "Food", type: "STRING" },
                        { name: "Gaming", value: "Gaming", type: "STRING" },
                        { name: "International", value: "International", type: "STRING" },
                        { name: "Media", value: "Media", type: "STRING" },
                        { name: "Music", value: "Music", type: "STRING" },
                        { name: "Science", value: "Science", type: "STRING" },
                        { name: "Technology", value: "Technology", type: "STRING" },
                    ]
                }
            ]
        })
    }

    execute(client: BootClient, interaction: CommandInteraction) {
        const member = interaction.member as GuildMember;
        const category = interaction.options.getString("category");
        const content = interaction.options.getString("content");

        const embed = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor({ name: `${category} suggestion.` })
            .setDescription(content || "No content.")
            .setFooter({ text: `Suggestion by ${member.user.tag}`, iconURL: ( member.user.avatarURL() || undefined ) })

        interaction.reply({ content: "This command is a work in progress, this is not how it will function when it is finished.", embeds: [embed] })
    }
}