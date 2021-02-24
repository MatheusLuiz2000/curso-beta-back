import { Request, Response } from 'express';

// Services
import CursoService from '../services/CursoService';

class CursoController {
  async listar(req: Request, res: Response): Promise<Response> {
    const { status, data } = await CursoService.listar();

    return res.status(status).json(data);
  }
}

export default new CursoController();
