"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
class LoginValidator {
    async logar(req, res, next) {
        try {
            const schema = yup_1.object().shape({
                email: yup_1.string('Email deve ser texto').required('O email é obrigatório'),
                senha: yup_1.string('Senha deve ser texto').required('A senha é obrigatória')
            });
            await schema.validate(req.body, { abortEarly: false });
            return next();
        }
        catch (err) {
            console.log(err);
            return res.status(400).json({
                messages: err.errors
            });
        }
    }
}
exports.default = new LoginValidator();
