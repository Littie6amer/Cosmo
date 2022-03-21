import { BootClient, ClientEventBase } from "boot-client"

export default class Event extends ClientEventBase {
    constructor () {
        super({ name: "ready" })
    }

    execute(client: BootClient, ...data: any[]): void {
        client.user?.setPresence({
            activities: [{type: "LISTENING", name: "the debates | @spikey"}]
        })
    }
}