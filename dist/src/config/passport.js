"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_http_bearer_1 = require("passport-http-bearer");
const passport_1 = __importDefault(require("passport"));
const api_chave = process.env.KEY_SERVICO;
const strategy = new passport_http_bearer_1.Strategy((key, done) => {
    if (key === api_chave)
        return done(null, true);
    return done('Chave incorreta');
});
passport_1.default.use(strategy);
exports.default = {
    initialize: () => passport_1.default.initialize(),
    authenticate: () => passport_1.default.authenticate('bearer', { session: false })
};
