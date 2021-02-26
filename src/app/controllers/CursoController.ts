import { Request, Response } from 'express';

// Services
import CursoService from '../services/CursoService';

class CursoController {
  async listar(req: Request, res: Response): Promise<Response> {
    const { status, data } = await CursoService.listar(req.query);

    return res.status(status).json(data);
  }

  async listarCurso(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await CursoService.listarCurso(id);

    return res.status(status).json(data);
  }

  async criarCurso(req: Request, res: Response): Promise<Response> {
    const { status, data } = await CursoService.criarCurso(req.body);

    return res.status(status).json(data);
  }

  async alterarCurso(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await CursoService.alterarCurso(req.body, id);

    return res.status(status).json(data);
  }

  async remover(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await CursoService.remover(id);

    return res.status(status).json(data);
  }
}

export default new CursoController();
