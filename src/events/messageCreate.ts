import { BootClient, ClientEventBase } from "boot-client"
import { Message, MessageEmbed } from "discord.js"
let prefix = "sp!"

export default class Event extends ClientEventBase {
    constructor() {
        super({ name: "messageCreate" })
    }

    async execute(client: BootClient, message: Message) {
        if (!(message.channel.type == "GUILD_TEXT" && message.guild) || message.author.bot) return;
        if ([`<@${client.user?.id}>`, `<@!${client.user?.id}>`].includes(message.content.toLowerCase())) {
            const embed = new MessageEmbed()
                .setAuthor({ name: "Welcome to Spikey!", iconURL: client.user?.avatarURL()||undefined })
                .setDescription("The wonderful bot making sure some parts of the server operates. However currently only does nothing but waste the creator's resources, we love spikey :D")
                .addField("Created By", `<@402888568579686401>`)
                .setColor("BLUE")
            return message.reply({embeds:[embed]})
        }

        if (!message.content.startsWith(prefix)) return;
        let args = message.content.split(" ")
        let command = args.shift()?.toLowerCase().slice(prefix.length)
        if (command == "quote") {
            if (!message.member?.roles.cache.get("794323627955716147")) return;
            let channel = args[0] ? message.guild.channels.cache.get(args[0].replace("<", "").replace("#", "").replace("!", "").replace(">", "")) : null
            if (args.length < 2 || !channel || !channel.isText()) return message.reply(`\`${prefix}quote #message-channel [Message ID]\``)
            let msg = await channel.messages.fetch(args[1])
            if (!msg) return message.reply("Unable to fetch that message!")
            let data: {
                content?: string, 
                embeds?: MessageEmbed[]
            } = {}
            if (msg.content.length) data.content = msg.content
            if (msg.embeds.length) data.embeds = msg.embeds
            if (!data) return message.reply("Empty message!")
            return message.channel.send(data)
        }
    }
}