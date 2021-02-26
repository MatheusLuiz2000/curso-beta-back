"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function default_1(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json('Usuario não autenticado');
    }
    const [, token] = authorization.split(' ');
    await jsonwebtoken_1.default.verify(token, process.env.KEY, function (err, decoded) {
        if (err) {
            return res.status(200).json('Usuario não autenticado');
        }
        return next();
    });
}
exports.default = default_1;
