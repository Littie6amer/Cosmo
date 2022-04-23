import { BootClient, SlashCommandBase } from "boot-client";
import { CommandInteraction, CacheType, GuildMember } from "discord.js";
import { Modal, TextInputComponent, showModal } from 'discord-modals'

const modal = new Modal() // We create a Modal
    .setCustomId('modal-customid')
    .setTitle('Test of Discord-Modals!')
    .addComponents(
        new TextInputComponent() // We create a Text Input Component
            .setCustomId('textinput-customid')
            .setLabel('Some text Here')
            .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
            .setMinLength(4)
            .setMaxLength(10)
            .setPlaceholder('Write a text here')
            .setRequired(true) // If it's required or not
    );

export default class MessageEmbedCommand extends SlashCommandBase {
    constructor() {
        super({
            name: "embed",
            description: "Make a spikey send a message!",
        })
    }

    execute(client: BootClient, interaction: CommandInteraction<CacheType>) {
        return showModal(modal, {
            client: client, // Client to show the Modal through the Discord API.
            interaction: interaction // Show the modal with interaction data.
        })
        // const member = interaction.member as GuildMember;
        // if (!member?.roles.cache.get("794323627955716147")) return;
        // return interaction.reply(`${interaction.options.getString("content")}`)
    }
}