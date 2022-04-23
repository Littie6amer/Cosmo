import { SlashCommandBase } from "boot-client";
import MessageText from "./text";
import MessageRepeat from "./repeat";
import MessageEmbedCommand from "./embed";

export default class MessageCommand extends SlashCommandBase {
    constructor() {
        super({
            name: "message",
            description: "Get spikey to send a message!",
            subcommands: [
                new MessageText(), new MessageRepeat(), new MessageEmbedCommand()
            ]
        })
    }
}