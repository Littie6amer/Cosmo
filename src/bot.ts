import { BootClient } from "boot-client"
const client = new BootClient({ eventFolders: ["events"], intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"], slashCommandFolders: ["commands"] })
client.login(process.env.BOT_TOKEN)