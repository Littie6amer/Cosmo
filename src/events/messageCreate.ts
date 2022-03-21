import { BootClient, ClientEventBase } from "boot-client"
import { Message, MessageEmbed } from "discord.js"

export default class Event extends ClientEventBase {
    constructor() {
        super({ name: "messageCreate" })
    }

    execute(client: BootClient, message: Message) {
        if (!(message.channel.type == "GUILD_TEXT" && message.guild) || message.author.bot) return;
        if ([`<@${client.user?.id}>`, `<@!${client.user?.id}>`].includes(message.content.toLowerCase())) {
            const embed = new MessageEmbed()
                .setAuthor({ name: "Welcome to Spikey!", iconURL: client.user?.avatarURL()||undefined })
                .setDescription("The wonderful bot making sure some parts of the server operates. However currently only does nothing but waste the creator's resources, we love spikey :D")
                .addField("Created By", `<@402888568579686401>`)
                .setColor("BLUE")
            return message.reply({embeds:[embed]})
        }
    }
}