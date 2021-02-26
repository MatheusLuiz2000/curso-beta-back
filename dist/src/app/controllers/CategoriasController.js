"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriasService_1 = __importDefault(require("../services/CategoriasService"));
class CategoriasController {
    async listar(req, res) {
        const { status, data } = await CategoriasService_1.default.listar();
        return res.status(status).json(data);
    }
}
exports.default = new CategoriasController();
