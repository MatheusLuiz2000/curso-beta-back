// eslint-disable-next-line no-unused-vars
import express, { Router } from 'express';
import CursoController from './app/controllers/CursoController';
import CursoValidator from './app/validators/CursoValidator';

const routes = new Router();

routes.get('/health', (req, res) => {
  return res.json({ ok: true });
});

routes.get('/', CursoController.listar);
routes.post('/cursos', CursoValidator.criarCurso, CursoController.criarCurso);
routes.patch(
  '/cursos/:id',
  CursoValidator.alterarCurso,
  CursoController.alterarCurso
);
routes.delete('/cursos/:id', CursoController.remover);

export default routes;
