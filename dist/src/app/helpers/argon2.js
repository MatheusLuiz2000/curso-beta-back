"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
async function hash(senha) {
    const retorno = await argon2_1.default.hash(senha, {
        type: argon2_1.default.argon2i,
        hashLength: 100
    });
    return retorno;
}
exports.default = hash;
