import { Request, Response } from 'express';

// Services
import CategoriasService from '../services/CategoriasService';

class CategoriasController {
  async listar(req, res) {
    const { status, data } = await CategoriasService.listar();

    return res.status(status).json(data);
  }
}

export default new CategoriasController();
