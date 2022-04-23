"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_client_1 = require("boot-client");
class SuggestCommand extends boot_client_1.SlashCommandBase {
    constructor() {
        super({
            name: "suggest",
            description: "Suggest SOMETHING!!",
            options: [{
                    name: "content",
                    type: "STRING",
                    description: "Your suggestion."
                }]
        });
    }
}
exports.default = SuggestCommand;
