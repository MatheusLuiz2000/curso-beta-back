"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CursoValidator_1 = __importDefault(require("./app/validators/CursoValidator"));
const LoginValidator_1 = __importDefault(require("./app/validators/LoginValidator"));
const CursoController_1 = __importDefault(require("./app/controllers/CursoController"));
const CategoriasController_1 = __importDefault(require("./app/controllers/CategoriasController"));
const LoginController_1 = __importDefault(require("./app/controllers/LoginController"));
const Autenticar_1 = __importDefault(require("./app/auth/Autenticar"));
const routes = express_1.default.Router();
routes.get('/health', (req, res) => {
    return res.json({ ok: true });
});
routes.get('/cursos', Autenticar_1.default, CursoController_1.default.listar);
routes.get('/curso/:id', Autenticar_1.default, CursoController_1.default.listarCurso);
routes.get('/categorias', Autenticar_1.default, CategoriasController_1.default.listar);
routes.post('/cursos', Autenticar_1.default, CursoValidator_1.default.criarCurso, CursoController_1.default.criarCurso);
routes.patch('/curso/:id', Autenticar_1.default, CursoValidator_1.default.alterarCurso, CursoController_1.default.alterarCurso);
routes.delete('/curso/:id', Autenticar_1.default, CursoController_1.default.remover);
routes.post('/logar', LoginValidator_1.default.logar, LoginController_1.default.logar);
exports.default = routes;
