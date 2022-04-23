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
class Event extends boot_client_1.ClientEventBase {
    constructor() {
        super({ name: "guildMemberAdd" });
    }
    execute(client, member) {
        return __awaiter(this, void 0, void 0, function* () {
            if (member.guild.id != "794313251185098782")
                return;
        });
    }
}
exports.default = Event;
