import { Request, Response } from 'express';

// Services
import CategoriasService from '../services/CategoriasService';

class CategoriasController {
  async listar(req: Request, res: Response): Promise<Response> {
    const { status, data } = await CategoriasService.listar();

    return res.status(status).json(data);
  }
}

export default new CategoriasController();
