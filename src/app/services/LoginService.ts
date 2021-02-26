import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import hash from '../helpers/argon2';
import 'dotenv/config';

// Models
import Administrador from '../models/Administrador';

class LoginService {
  async logar(email, senha) {
    const busca = await Administrador.findOne({
      where: {
        email
      }
    });

    if (!busca) {
      return {
        status: 400,
        data: 'E-mail não encontrado!'
      };
    }

    if (!(await argon2.verify(busca.senha, senha))) {
      return {
        status: 401,
        data: 'Senha Incorreta'
      };
    }

    const token = jwt.sign(
      {
        email
      },
      process.env.KEY
    );

    return {
      status: 200,
      data: {
        email,
        token
      }
    };
  }
}

export default new LoginService();
