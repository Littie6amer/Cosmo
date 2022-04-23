import { SlashCommandBase } from "boot-client";

export default class Quote extends SlashCommandBase {
    constructor() {
        super({
            name: "quote",
            description: "Quote someone's message!",
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
                }
            ]
        })
    }
}