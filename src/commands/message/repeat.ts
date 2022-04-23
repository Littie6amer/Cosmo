import { SlashCommandBase } from "boot-client";

export default class MessageRepeat extends SlashCommandBase {
    constructor() {
        super({
            name: "repeat",
            description: "Make a spikey repeat a message!",
            options: [
                {
                    name: "id",
                    type: "STRING",
                    description: "The message id.",
                    required: true
                },
                {
                    name: "channel",
                    description: "The channel the message was sent in.",
                    type: "CHANNEL",
                    channel_types: ["GUILD_TEXT"]
                },
                {
                    name: "to",
                    description: "Where spikey should repeat it.",
                    type: "CHANNEL",
                    channel_types: ["GUILD_TEXT"]
                },
            ]
        })
    }
}