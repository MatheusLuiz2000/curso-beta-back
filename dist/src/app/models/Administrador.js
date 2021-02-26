"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { Model } = require('sequelize');
class Administrador extends Model {
    static init(sequelize) {
        super.init({
            email: sequelize_1.default.STRING(255),
            senha: sequelize_1.default.STRING(255),
            desativado_em: sequelize_1.default.DATE
        }, {
            sequelize,
            tableName: 'tb_administradores',
            createdAt: 'criado_em',
            updatedAt: 'atualizado_em'
        });
        return this;
    }
}
exports.default = Administrador;
