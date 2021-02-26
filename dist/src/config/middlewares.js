"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const Middlewares = (app) => {
    app.use(body_parser_1.default.json());
    app.use(cors_1.default({ origin: '*' }));
    app.use(express_1.default.static(path_1.default.resolve('./apidoc')));
    app.use(express_1.default.static(path_1.default.resolve('./__tests__/coverage/lcov-report')));
};
exports.default = Middlewares;
