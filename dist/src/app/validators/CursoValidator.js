"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
class CursoValidator {
    async criarCurso(req, res, next) {
        try {
            const schema = yup_1.object().shape({
                nome: yup_1.string('Nome deve ser texto').required('O nome é obrigatório'),
                descricao: yup_1.string('Descrição deve ser texto').required('A descrição é obrigatória'),
                categoria: yup_1.number('A categoria deve ser número').required('A categoria é obrigatória'),
                url: yup_1.string('URL deve ser texto').required('A URL é obrigatória')
            });
            await schema.validate(req.body, { abortEarly: false });
            return next();
        }
        catch (err) {
            return res.status(400).json({
                messages: err.errors
            });
        }
    }
    async alterarCurso(req, res, next) {
        try {
            const schema = yup_1.object().shape({
                nome: yup_1.string('Nome deve ser texto').required('O nome é obrigatório'),
                descricao: yup_1.string('Descrição deve ser texto').required('A descrição é obrigatória'),
                categoria: yup_1.number('A categoria deve ser número').required('A categoria é obrigatória'),
                url: yup_1.string('URL deve ser texto').required('A URL é obrigatória')
            });
            await schema.validate(req.body, { abortEarly: false });
            return next();
        }
        catch (err) {
            return res.status(400).json({
                messages: err.errors
            });
        }
    }
}
exports.default = new CursoValidator();
