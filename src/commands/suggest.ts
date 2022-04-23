import { BootClient, SlashCommandBase } from "boot-client"
import { CommandInteraction, CacheType } from "discord.js"

export default class SuggestCommand extends SlashCommandBase {
    constructor () {
        super ({
            name: "suggest",
            description: "Suggest SOMETHING!!",
            options: [{ 
                name: "content", 
                type: "STRING",
                description: "Your suggestion."
            }]
        })
    }
}