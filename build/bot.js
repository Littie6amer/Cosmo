"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_client_1 = require("boot-client");
const client = new boot_client_1.BootClient({ eventFolders: ["events"], intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"], slashCommandFolders: ["commands"] });
client.login(process.env.BOT_TOKEN);
