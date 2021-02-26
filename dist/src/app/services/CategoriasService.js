"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Categorias_1 = __importDefault(require("../models/Categorias"));
class CategoriaService {
    async listar() {
        const busca = await Categorias_1.default.findAll({
            where: {
                desativado_em: null
            }
        });
        return {
            status: 200,
            data: busca
        };
    }
}
exports.default = new CategoriaService();
