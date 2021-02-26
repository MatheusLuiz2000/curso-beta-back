"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginService_1 = __importDefault(require("../services/LoginService"));
class LoginController {
    async logar(req, res) {
        const { email, senha } = req.body;
        const { status, data } = await LoginService_1.default.logar(email, senha);
        return res.status(status).json(data);
    }
}
exports.default = new LoginController();
