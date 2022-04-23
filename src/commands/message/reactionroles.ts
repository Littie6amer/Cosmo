import { BootClient, SlashCommandBase } from "boot-client";
import { CommandInteraction, CacheType, GuildMember } from "discord.js";

export default class MessageText extends SlashCommandBase {
    constructor() {
        super({
            name: "reactionroles",
            description: "temp",
            options: []
        })
    }
}