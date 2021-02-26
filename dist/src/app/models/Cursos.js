"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { Model } = require('sequelize');
class Cursos extends Model {
    static init(sequelize) {
        super.init({
            nome: sequelize_1.default.STRING(155),
            descricao: sequelize_1.default.STRING(155),
            categoria: sequelize_1.default.INTEGER,
            url: sequelize_1.default.STRING(155),
            desativado_em: sequelize_1.default.DATE
        }, {
            sequelize,
            tableName: 'tb_cursos',
            createdAt: 'criado_em',
            updatedAt: 'atualizado_em'
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Categorias, {
            foreignKey: 'categoria',
            as: 'categorias'
        });
    }
}
exports.default = Cursos;
