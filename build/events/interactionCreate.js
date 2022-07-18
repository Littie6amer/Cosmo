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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
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
                .setColor("#c5d0e6")
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
            return interaction.reply({ embeds: [embed], ephemeral: true });
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
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        if (interaction.customId.startsWith("selected")) {
            if (!(((_s = interaction.member) === null || _s === void 0 ? void 0 : _s.roles) instanceof discord_js_1.GuildMemberRoleManager))
                return;
            const roles = ["801513024023560213", "801511538032246825", "801511960390402068", "801511966875058236", "811661751020027966"];
            let gender = [];
            if (interaction.member.roles.cache.get("794323658541629470"))
                gender.push("Male");
            if (interaction.member.roles.cache.get("794323658864066612"))
                gender.push("Female");
            if (interaction.member.roles.cache.get("794323659762040885"))
                gender.push("Other");
            if (!gender.length)
                gender.push("Not stated");
            let age = "Not stated";
            if (interaction.member.roles.cache.get("794323656422719488"))
                age = "18+";
            else if (interaction.member.roles.cache.get("794323657827549194"))
                age = "13+";
            let notification_roles = (_t = interaction.member) === null || _t === void 0 ? void 0 : _t.roles.cache.filter(role => ["801513024023560213", "801511538032246825", "801511960390402068", "801511966875058236"].includes(role.id)).map(role => `${role.name}`).join("\n");
            const embed = new discord_js_1.MessageEmbed()
                .setColor("GREY")
                .setAuthor({ name: `${(_u = interaction.member) === null || _u === void 0 ? void 0 : _u.user.username}`, iconURL: (_w = ((_v = interaction.member) === null || _v === void 0 ? void 0 : _v.user).avatarURL()) !== null && _w !== void 0 ? _w : undefined })
                //.setDescription(interaction.member?.roles.cache.filter(role => roles.includes(role.id)).map(role => `<@&${role.id}>`).join(" "))
                .addField("Your Gender", gender.join(", "), true)
                .addField("Your Age", age, true)
                .addField("Notification Settings", notification_roles || "Disabled.");
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        if (interaction.customId.startsWith("enter:")) {
            if (!(((_x = interaction.member) === null || _x === void 0 ? void 0 : _x.roles) instanceof discord_js_1.GuildMemberRoleManager))
                return;
            const guild = client.guilds.cache.get("794313251185098782");
            const roleId = interaction.customId.slice("enter:".length);
            const role = guild === null || guild === void 0 ? void 0 : guild.roles.cache.get(roleId);
            if (!role)
                return;
            interaction.member.roles.add(roleId);
            interaction.member.roles.remove("805840704450461747");
            const embed = new discord_js_1.MessageEmbed()
                .setColor(role.color)
                .setDescription(`Welcome to <@&${roleId}>!`);
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        return interaction.reply({ content: `Interaction **${interaction.customId}** was not processed, sorry.\nPlease report this to <@402888568579686401>.`, ephemeral: true });
    }
}
exports.default = Event;
