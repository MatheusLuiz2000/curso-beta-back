"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CursoService_1 = __importDefault(require("../services/CursoService"));
class CursoController {
    async listar(req, res) {
        const { status, data } = await CursoService_1.default.listar(req.query);
        return res.status(status).json(data);
    }
    async listarCurso(req, res) {
        const { id } = req.params;
        const { status, data } = await CursoService_1.default.listarCurso(id);
        return res.status(status).json(data);
    }
    async criarCurso(req, res) {
        const { status, data } = await CursoService_1.default.criarCurso(req.body);
        return res.status(status).json(data);
    }
    async alterarCurso(req, res) {
        const { id } = req.params;
        const { status, data } = await CursoService_1.default.alterarCurso(req.body, id);
        return res.status(status).json(data);
    }
    async remover(req, res) {
        const { id } = req.params;
        const { status, data } = await CursoService_1.default.remover(id);
        return res.status(status).json(data);
    }
}
exports.default = new CursoController();
