import { BootClient, ClientEventBase } from "boot-client"
import { Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js"
let prefix = "sp!"

export default class Event extends ClientEventBase {
    constructor() {
        super({ name: "messageCreate" })
    }

    async execute(client: BootClient, message: Message) {
        if (!(message.channel.type == "GUILD_TEXT" && message.guild) || message.author.bot) return;
        if ([`<@${client.user?.id}>`, `<@!${client.user?.id}>`].includes(message.content.toLowerCase())) {
            const embed = new MessageEmbed()
                .setAuthor({ name: "Welcome to Spikey!", iconURL: client.user?.avatarURL() || undefined })
                .setDescription("The wonderful bot making sure some parts of the server operates. However currently only does nothing but waste the creator's resources, we love spikey :D")
                .addField("Created By", `<@402888568579686401>`)
                .setColor("BLUE")
            return message.reply({ embeds: [embed] })
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

        if (command == "play") {
            return message.reply("Can't be bothered to play music for you.")
        }

        if (command == "return-embed") {
            const embed = new MessageEmbed()
                .setColor("#c5d0e6")
                .setAuthor("🌌 Return")
                .setDescription("Yeets you back to the community galaxy.")
            const button = new MessageButton().setCustomId("take-me-back")
                .setLabel("Take me home")
                .setStyle("DANGER")
            message.channel.send({ embeds: [embed], components: [new MessageActionRow().setComponents(button)] })
        }

        if (command == "info-embed") {
            const embeds = [
                new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("💻 Technology galaxy")
                    .setDescription("This is the technology wormhole, which takes you to the techonology galaxy! If you want to talk techonology, the technology galaxy is the place!")
                    .setImage("https://media.discordapp.net/attachments/840673125711872020/959857357343559740/unknown.png?width=437&height=74"),
            ]
            const components = [
                new MessageActionRow().setComponents(
                    new MessageButton().setCustomId("enter-technology")
                        .setLabel("Enter the wormhole")
                        .setStyle("SUCCESS")
                )
            ]
            message.channel.send({ embeds, components })
        }

        if (command == "reactions") {
            message.delete()
            let embed = new MessageEmbed()
                .setColor("#fcff9b")
                .setAuthor("Select Your Age Group")
            let components = [
                new MessageActionRow().setComponents([
                    new MessageButton().setCustomId("toggle:794323657827549194")
                        .setLabel("13+")
                        .setStyle("PRIMARY")
                        .setEmoji("🧒"),
                    new MessageButton().setCustomId("toggle:794323656422719488")
                        .setLabel("18+")
                        .setStyle("PRIMARY")
                        .setEmoji("🧑"),
                ])
            ]
            message.channel.send({ embeds: [embed], components })
            await sleep(600000)
            embed = new MessageEmbed()
                .setColor("#f2a495")
                .setAuthor("Select Your Gender")
            components = [
                new MessageActionRow().setComponents([
                    new MessageButton().setCustomId("toggle:794323658541629470")
                        .setLabel("Male")
                        .setStyle("PRIMARY")
                        .setEmoji("♂️"),
                    new MessageButton().setCustomId("toggle:794323658864066612")
                        .setLabel("Female")
                        .setStyle("PRIMARY")
                        .setEmoji("♀️"),
                    new MessageButton().setCustomId("toggle:794323659762040885")
                        .setLabel("Other")
                        .setStyle("PRIMARY")
                        .setEmoji("🏳️‍🌈"),
                ])
            ]
            message.channel.send({ embeds: [embed], components })
            await sleep(600000)
            embed = new MessageEmbed()
                .setColor("#ae9bff")
                .setAuthor("Choose Your Notification Settings")
            components = [
                new MessageActionRow().setComponents([
                    new MessageButton().setCustomId("toggle:801513024023560213")
                        .setLabel("Announcements")
                        .setStyle("PRIMARY")
                        .setEmoji("📢"),
                    new MessageButton().setCustomId("toggle:801511538032246825")
                        .setLabel("Events")
                        .setStyle("PRIMARY")
                        .setEmoji("🎉"),
                    new MessageButton().setCustomId("toggle:801511960390402068")
                        .setLabel("Partners")
                        .setStyle("PRIMARY")
                        .setEmoji("🤝"),
                    new MessageButton().setCustomId("toggle:801511966875058236")
                        .setLabel("Polls")
                        .setStyle("PRIMARY")
                        .setEmoji("📊"),
                ])
            ]
            message.channel.send({ embeds: [embed], components })
            await sleep(600000)
            embed = new MessageEmbed()
                .setColor("#a5ffa3")
                .setAuthor("React To See Member Statistics")
            components = [
                new MessageActionRow().setComponents([
                    new MessageButton().setCustomId("toggle:811661751020027966")
                        .setLabel("Statistics")
                        .setStyle("PRIMARY")
                        .setEmoji("📈")
                ])
            ]
            message.channel.send({ embeds: [embed], components })
            await sleep(600000)
            embed = new MessageEmbed()
                .setColor("#15F4EE")
                .setAuthor("React To See Currently Selected Roles")
            components = [
                new MessageActionRow().setComponents([
                    new MessageButton().setCustomId("selected")
                        .setLabel("Selected Roles")
                        .setStyle("PRIMARY")
                        .setEmoji("👤"),
                ])
            ]
            message.channel.send({ embeds: [embed], components })
        }
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}