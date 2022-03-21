import { BootClient } from "boot-client"
const client = new BootClient({ eventFolders: ["events"] })

client.login(process.env.BOT_TOKEN)