import { BootClient } from "boot-client"
const client = new BootClient({ eventFolders: ["events"], intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_VOICE_STATES"], slashCommandFolders: ["commands"], mobile: true })
client.login(process.env.BOT_TOKEN)