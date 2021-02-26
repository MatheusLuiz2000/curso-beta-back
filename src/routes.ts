// eslint-disable-next-line no-unused-vars
import express, { Router } from 'express';

// Validator
import CursoValidator from './app/validators/CursoValidator';
import LoginValidator from './app/validators/LoginValidator';

// Controllers
import CursoController from './app/controllers/CursoController';
import CategoriasController from './app/controllers/CategoriasController';
import LoginController from './app/controllers/LoginController';

// Auth
import Autenticar from './app/auth/Autenticar';

const routes = express.Router();

routes.get('/health', (req, res) => {
  return res.json({ ok: true });
});

routes.get('/cursos', Autenticar, CursoController.listar);
routes.get('/curso/:id', Autenticar, CursoController.listarCurso);

routes.get('/categorias', Autenticar, CategoriasController.listar);
routes.post(
  '/cursos',
  Autenticar,
  CursoValidator.criarCurso,
  CursoController.criarCurso
);
routes.patch(
  '/curso/:id',
  Autenticar,
  CursoValidator.alterarCurso,
  CursoController.alterarCurso
);
routes.delete('/curso/:id', Autenticar, CursoController.remover);
routes.post('/logar', LoginValidator.logar, LoginController.logar);

export default routes;
