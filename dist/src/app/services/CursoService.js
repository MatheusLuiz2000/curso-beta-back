"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Categorias_1 = __importDefault(require("../models/Categorias"));
const Cursos_1 = __importDefault(require("../models/Cursos"));
class CursoService {
    async listar(query) {
        const filtro = query.valor && query.opcao !== 'categoria'
            ? {
                [query.opcao]: {
                    [sequelize_1.Op.like]: `%${query.valor}%`
                }
            }
            : {};
        const filtroCategoria = query.opcao === 'categoria'
            ? {
                nome: {
                    [sequelize_1.Op.like]: `%${query.valor}%`
                }
            }
            : {};
        const busca = await Cursos_1.default.findAndCountAll({
            where: Object.assign({ desativado_em: null }, filtro),
            include: [
                {
                    model: Categorias_1.default,
                    as: 'categorias',
                    where: Object.assign({}, filtroCategoria)
                }
            ],
            limit: parseInt(query.limit, 10),
            offset: parseInt(query.offset, 10)
        });
        return {
            status: 200,
            data: busca
        };
    }
    async listarCurso(id) {
        if (!id) {
            return {
                status: 400,
                data: 'ID do curso não fornecido'
            };
        }
        const buscaCurso = await Cursos_1.default.findOne({
            where: {
                id,
                desativado_em: null
            },
            include: [
                {
                    model: Categorias_1.default,
                    as: 'categorias',
                    attributes: ['nome']
                }
            ]
        });
        if (!buscaCurso) {
            return {
                status: 204
            };
        }
        const buscaCategorias = await Categorias_1.default.findAll({
            where: {
                desativado_em: null
            }
        });
        return {
            status: 200,
            data: {
                curso: buscaCurso,
                categorias: buscaCategorias
            }
        };
    }
    async criarCurso(dados) {
        const { nome, descricao, categoria, url } = dados;
        await Cursos_1.default.create({
            nome,
            descricao,
            categoria,
            url
        });
        return {
            status: 200,
            data: 'Curso criado com sucesso!'
        };
    }
    async alterarCurso(dados, id) {
        const { nome, descricao, categoria, url } = dados;
        const busca = await Cursos_1.default.findByPk(id);
        if (!busca) {
            return {
                status: 400,
                data: 'Curso não encontrado!'
            };
        }
        busca.update({
            nome,
            descricao,
            categoria,
            url
        });
        return {
            status: 200,
            data: 'Curso alterado com sucesso!'
        };
    }
    async remover(id) {
        const busca = await Cursos_1.default.findByPk(id);
        if (!busca) {
            return {
                status: 400,
                data: 'Curso não encontrado'
            };
        }
        busca.update({
            desativado_em: new Date()
        });
        return {
            status: 200,
            data: 'Curso desativado com sucesso!'
        };
    }
}
exports.default = new CursoService();
