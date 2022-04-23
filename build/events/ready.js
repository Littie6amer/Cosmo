"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const boot_client_1 = require("boot-client");
const voice_1 = require("@discordjs/voice");
class Event extends boot_client_1.ClientEventBase {
    constructor() {
        super({ name: "ready" });
    }
    execute(client, ...data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
                activities: [{
                        type: "LISTENING",
                        name: "furious typing"
                    }]
            });
            const guild = client.guilds.cache.get("794313251185098782");
            const members = yield (guild === null || guild === void 0 ? void 0 : guild.members.fetch());
            const memberCountChannel = client.channels.cache.get("959817177924505651");
            const onlineCountChannel = client.channels.cache.get("959817263987445880");
            const theVC = client.channels.cache.get("954452250774863883");
            memberCountChannel === null || memberCountChannel === void 0 ? void 0 : memberCountChannel.setName(`Members: ${members === null || members === void 0 ? void 0 : members.size}`);
            onlineCountChannel === null || onlineCountChannel === void 0 ? void 0 : onlineCountChannel.setName(`Online: ${members === null || members === void 0 ? void 0 : members.filter(m => { var _a; return !["offline", "invisible", undefined].includes((_a = m.presence) === null || _a === void 0 ? void 0 : _a.status); }).size}`);
            const connection = theVC ? (0, voice_1.joinVoiceChannel)({
                channelId: theVC.id,
                guildId: theVC.guild.id,
                adapterCreator: theVC.guild.voiceAdapterCreator,
            }) : null;
            setTimeout(() => {
                memberCountChannel === null || memberCountChannel === void 0 ? void 0 : memberCountChannel.setName(`Members: ${members === null || members === void 0 ? void 0 : members.size}`);
                onlineCountChannel === null || onlineCountChannel === void 0 ? void 0 : onlineCountChannel.setName(`Online: ${members === null || members === void 0 ? void 0 : members.filter(m => { var _a; return !["offline", "invisible", undefined].includes((_a = m.presence) === null || _a === void 0 ? void 0 : _a.status); }).size}`);
            }, 1800000);
            client.slashCommandManager._inDev_Deploy("suggest", "794313251185098782");
        });
    }
}
exports.default = Event;
