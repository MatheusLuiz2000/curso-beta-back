"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./bootstrap");
const youch_1 = __importDefault(require("youch"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = __importDefault(require("./config/middlewares"));
require("./database");
class App {
    constructor() {
        this.server = express_1.default();
        this.cors();
        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }
    middlewares() {
        middlewares_1.default(this.server);
    }
    routes() {
        this.server.use(routes_1.default);
    }
    cors() {
        this.server.use(cors_1.default());
    }
    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            console.log(err);
            const errors = await new youch_1.default(err, req).toJSON();
            return res
                .status(500)
                .json({ error: 'Erro interno do servidor', errors });
        });
    }
}
exports.default = new App().server;
