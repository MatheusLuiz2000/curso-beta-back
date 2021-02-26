"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const Administrador_1 = __importDefault(require("../models/Administrador"));
class LoginService {
    async logar(email, senha) {
        const busca = await Administrador_1.default.findOne({
            where: {
                email
            }
        });
        if (!busca) {
            return {
                status: 400,
                data: 'E-mail não encontrado!'
            };
        }
        if (!(await argon2_1.default.verify(busca.senha, senha))) {
            return {
                status: 401,
                data: 'Senha Incorreta'
            };
        }
        const token = jsonwebtoken_1.default.sign({
            email
        }, process.env.KEY);
        return {
            status: 200,
            data: {
                email,
                token
            }
        };
    }
}
exports.default = new LoginService();
