"use strict";
//arts <@&955962321086320640>
//debating <@&955274820843602000>
//food <@&958082649082171392>
//gaming <@&955275461078958103>
//international <@&955275279155200090>
//media <@&958520535044722718>
//music <@&955274994231951420> 
//science <@&955962455979339798>
//technology <@&957446135222505562>
Object.defineProperty(exports, "__esModule", { value: true });
const boot_client_1 = require("boot-client");
const discord_js_1 = require("discord.js");
class Event extends boot_client_1.ClientEventBase {
    constructor() {
        super({ name: "interactionCreate" });
    }
    execute(client, interaction) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        if (!interaction.isButton())
            return;
        if (((_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.id) != "794313251185098782")
            return;
        //console.log(interaction)
        const roles = [
            "955962321086320640",
            "955274820843602000",
            "958082649082171392",
            "955275461078958103",
            "955275279155200090",
            "958520535044722718",
            "955274994231951420",
            "955962455979339798",
            "957446135222505562", //technology
        ];
        if (interaction.customId == "take-me-back") {
            console.log((_b = interaction.member) === null || _b === void 0 ? void 0 : _b.roles);
            if (!(((_c = interaction.member) === null || _c === void 0 ? void 0 : _c.roles) instanceof discord_js_1.GuildMemberRoleManager))
                return;
            for (let role in roles) {
                if ((_d = interaction.member) === null || _d === void 0 ? void 0 : _d.roles.cache.get(roles[role]))
                    (_e = interaction.member) === null || _e === void 0 ? void 0 : _e.roles.remove(roles[role]);
            }
            (_f = interaction.member) === null || _f === void 0 ? void 0 : _f.roles.add("805840704450461747");
            const embed = new discord_js_1.MessageEmbed()
                .setColor("BLUE")
                .setAuthor(`👋 See you later, ${(_h = (_g = interaction.member) === null || _g === void 0 ? void 0 : _g.user) === null || _h === void 0 ? void 0 : _h.username}!`)
                .setDescription(`You can use another wormhole to go to another galaxy:\n\n<#955962095789305926>\n<#955256818345586708>\n<#958090216013455410>\n<#955257133472047155>\n<#955257031332343888>\n<#958523543845478411>\n<#955977381552750682>\n<#957443748143456266>`);
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        if (interaction.customId.startsWith("toggle:")) {
            const oneOnly = [["794323658864066612", "794323658541629470", "794323659762040885"], ["794323657827549194", "794323656422719488"]];
            const guild = client.guilds.cache.get("794313251185098782");
            const roleId = interaction.customId.slice("toggle:".length);
            const role = guild === null || guild === void 0 ? void 0 : guild.roles.cache.get(roleId);
            if (!role)
                return;
            if (!(((_j = interaction.member) === null || _j === void 0 ? void 0 : _j.roles) instanceof discord_js_1.GuildMemberRoleManager))
                return;
            const has = (_k = interaction.member) === null || _k === void 0 ? void 0 : _k.roles.cache.get(roleId);
            let mode = has ? "remove" : "add";
            if (has)
                (_l = interaction.member) === null || _l === void 0 ? void 0 : _l.roles.remove(roleId);
            else {
                const removeRoles = ((_m = oneOnly.find(roles => roles.find(role => role == roleId))) === null || _m === void 0 ? void 0 : _m.filter(role => role != roleId)) || [];
                removeRoles.forEach(role => {
                    var _a, _b;
                    if (!(((_a = interaction.member) === null || _a === void 0 ? void 0 : _a.roles) instanceof discord_js_1.GuildMemberRoleManager))
                        return;
                    (_b = interaction.member) === null || _b === void 0 ? void 0 : _b.roles.remove(role);
                });
                (_o = interaction.member) === null || _o === void 0 ? void 0 : _o.roles.add(roleId);
            }
            const embed = new discord_js_1.MessageEmbed()
                .setColor(role.color)
                .setDescription(`${has ? "Removed" : "Added"} the <@&${roleId}> role!`);
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
        if (interaction.customId.startsWith("add:")) {
            const guild = client.guilds.cache.get("794313251185098782");
            const roleId = interaction.customId.slice("add:".length);
            const role = guild === null || guild === void 0 ? void 0 : guild.roles.cache.get(roleId);
            if (!role)
                return;
            if (!(((_p = interaction.member) === null || _p === void 0 ? void 0 : _p.roles) instanceof discord_js_1.GuildMemberRoleManager))
                return;
            if (!((_q = interaction.member) === null || _q === void 0 ? void 0 : _q.roles.cache.get(roleId)))
                (_r = interaction.member) === null || _r === void 0 ? void 0 : _r.roles.add(roleId);
            const embed = new discord_js_1.MessageEmbed()
                .setColor(role.color)
                .setDescription(`Added the <@&${roleId}> role!`);
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
        if (interaction.customId.startsWith("selected")) {
            if (!(((_s = interaction.member) === null || _s === void 0 ? void 0 : _s.roles) instanceof discord_js_1.GuildMemberRoleManager))
                return;
            const roles = ["794323657827549194", "794323656422719488", "794323658541629470", "794323658864066612", "794323659762040885", "801513024023560213", "801511538032246825", "801511960390402068", "801511966875058236", "811661751020027966"];
            const embed = new discord_js_1.MessageEmbed()
                .setColor("GREY")
                .setAuthor({ name: `${(_t = interaction.member) === null || _t === void 0 ? void 0 : _t.user.username}'s Roles`, iconURL: (_v = ((_u = interaction.member) === null || _u === void 0 ? void 0 : _u.user).avatarURL()) !== null && _v !== void 0 ? _v : undefined })
                .setDescription((_w = interaction.member) === null || _w === void 0 ? void 0 : _w.roles.cache.filter(role => roles.includes(role.id)).map(role => `<@&${role.id}>`).join(" "));
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
}
exports.default = Event;
