"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const Cursos_1 = __importDefault(require("../app/models/Cursos"));
const Categorias_1 = __importDefault(require("../app/models/Categorias"));
const Administrador_1 = __importDefault(require("../app/models/Administrador"));
const Sequelize = require('sequelize');
const models = [Categorias_1.default, Cursos_1.default, Administrador_1.default];
class Database {
    constructor() {
        this.SQL();
    }
    SQL() {
        this.connection = new Sequelize(database_1.default);
        models.map(model => model.init(this.connection));
        models.map(model => model.associate && model.associate(this.connection.models));
    }
}
exports.default = new Database();
