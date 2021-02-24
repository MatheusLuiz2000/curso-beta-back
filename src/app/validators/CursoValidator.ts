import { Request, Response, NextFunction } from 'express';
import { object, string, number, boolean } from 'yup';

class CursoValidator {
  async criarCurso(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = object().shape({
        nome: string('Nome deve ser texto').required('O nome é obrigatório'),
        descricao: string('Descrição deve ser texto').required(
          'A descrição é obrigatória'
        ),
        categoria: number('A categoria deve ser número').required(
          'A categoria é obrigatória'
        ),
        url: string('URL deve ser texto').required('A URL é obrigatória')
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return res.status(400).json({
        messages: err.errors
      });
    }
  }

  async alterarCurso(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = object().shape({
        nome: string('Nome deve ser texto').required('O nome é obrigatório'),
        descricao: string('Descrição deve ser texto').required(
          'A descrição é obrigatória'
        ),
        categoria: number('A categoria deve ser número').required(
          'A categoria é obrigatória'
        ),
        url: string('URL deve ser texto').required('A URL é obrigatória')
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return res.status(400).json({
        messages: err.errors
      });
    }
  }
}

export default new CursoValidator();
