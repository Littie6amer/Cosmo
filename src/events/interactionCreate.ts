//arts <@&955962321086320640>
//debating <@&955274820843602000>
//food <@&958082649082171392>
//gaming <@&955275461078958103>
//international <@&955275279155200090>
//media <@&958520535044722718>
//music <@&955274994231951420> 
//science <@&955962455979339798>
//technology <@&957446135222505562>

import { BootClient, ClientEventBase } from "boot-client"
import { Guild, GuildMemberRoleManager, Interaction, MessageEmbed, Role, User } from "discord.js"

export default class Event extends ClientEventBase {
    constructor() {
        super({ name: "interactionCreate" })
    }

    execute(client: BootClient, interaction: Interaction) {
        if (!interaction.isButton()) return
        if (interaction.guild?.id != "794313251185098782") return;
        //console.log(interaction)
        const roles = [
            "955962321086320640", //arts
            "955274820843602000", //debating
            "958082649082171392", //food
            "955275461078958103", //gaming
            "955275279155200090", //international
            "958520535044722718", //media
            "955274994231951420", //music
            "955962455979339798", //science
            "957446135222505562", //technology
        ]
        
        if (interaction.customId == "take-me-back") {
            console.log(interaction.member?.roles)
            if (!(interaction.member?.roles instanceof GuildMemberRoleManager)) return;
            for (let role in roles) {
                if (interaction.member?.roles.cache.get(roles[role])) interaction.member?.roles.remove(roles[role]);
            }
            interaction.member?.roles.add("805840704450461747")
            const embed = new MessageEmbed()
                .setColor("BLUE")
                .setAuthor(`👋 See you later, ${interaction.member?.user?.username}!`)
                .setDescription(`You can use another wormhole to go to another galaxy:\n\n<#955962095789305926>\n<#955256818345586708>\n<#958090216013455410>\n<#955257133472047155>\n<#955257031332343888>\n<#958523543845478411>\n<#955977381552750682>\n<#957443748143456266>`)
            return interaction.reply({ embeds: [embed], ephemeral: true })
        }

        if (interaction.customId.startsWith("toggle:")) {
            const oneOnly = [["794323658864066612", "794323658541629470", "794323659762040885"], ["794323657827549194", "794323656422719488"]]
            const guild = client.guilds.cache.get("794313251185098782") as (Guild | undefined)
            const roleId = interaction.customId.slice("toggle:".length)
            const role = guild?.roles.cache.get(roleId) as Role
            if (!role) return
            if (!(interaction.member?.roles instanceof GuildMemberRoleManager)) return;
            const has = interaction.member?.roles.cache.get(roleId)
            let mode = has ? "remove" : "add"
            if (has) interaction.member?.roles.remove(roleId)
            else {
                const removeRoles = oneOnly.find(roles => roles.find(role => role == roleId))?.filter(role => role != roleId)||[]
                removeRoles.forEach(role => {
                    if (!(interaction.member?.roles instanceof GuildMemberRoleManager)) return;
                    interaction.member?.roles.remove(role)
                })
                interaction.member?.roles.add(roleId)
            }
            const embed = new MessageEmbed()
                .setColor(role.color)
                .setDescription(`${has ? "Removed" : "Added"} the <@&${roleId}> role!`)
            interaction.reply({ embeds: [embed], ephemeral: true })
        }

        if (interaction.customId.startsWith("add:")) {
            const guild = client.guilds.cache.get("794313251185098782") as (Guild | undefined)
            const roleId = interaction.customId.slice("add:".length)
            const role = guild?.roles.cache.get(roleId) as Role
            if (!role) return;
            if (!(interaction.member?.roles instanceof GuildMemberRoleManager)) return;
            if (!interaction.member?.roles.cache.get(roleId)) interaction.member?.roles.add(roleId)
            const embed = new MessageEmbed()
                .setColor(role.color)
                .setDescription(`Added the <@&${roleId}> role!`)
            interaction.reply({ embeds: [embed], ephemeral: true })
        }

        if (interaction.customId.startsWith("selected")) {
            if (!(interaction.member?.roles instanceof GuildMemberRoleManager)) return;
            const roles = ["794323657827549194", "794323656422719488", "794323658541629470", "794323658864066612", "794323659762040885", "801513024023560213", "801511538032246825", "801511960390402068", "801511966875058236", "811661751020027966"]
            const embed = new MessageEmbed()
                .setColor("GREY")
                .setAuthor({ name: `${interaction.member?.user.username}'s Roles`, iconURL: (interaction.member?.user as User).avatarURL() ?? undefined })
                .setDescription(interaction.member?.roles.cache.filter(role => roles.includes(role.id)).map(role => `<@&${role.id}>`).join(" "))
            interaction.reply({ embeds: [embed], ephemeral: true })
        }
    }
}