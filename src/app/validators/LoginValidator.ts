import { Request, Response, NextFunction } from 'express';
import { object, string, number, boolean } from 'yup';

class LoginValidator {
  async logar(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = object().shape({
        email: string('Email deve ser texto').required('O email é obrigatório'),
        senha: string('Senha deve ser texto').required('A senha é obrigatória')
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        messages: err.errors
      });
    }
  }
}

export default new LoginValidator();
