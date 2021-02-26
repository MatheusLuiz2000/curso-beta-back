import { Request, Response } from 'express';

// Services
import LoginService from '../services/LoginService';

class LoginController {
  async logar(req, res) {
    const { email, senha } = req.body;

    const { status, data } = await LoginService.logar(email, senha);

    return res.status(status).json(data);
  }
}

export default new LoginController();
