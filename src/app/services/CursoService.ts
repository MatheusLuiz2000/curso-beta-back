import Cursos from '../models/Cursos';

class CursoService {
  async listar() {}

  async criarCurso(dados) {
    const { nome, descricao, categoria, url } = dados;

    await Cursos.create({
      nome,
      descricao,
      categoria,
      url
    });

    return {
      status: 200,
      data: 'Curso criado com sucesso!'
    };
  }

  async alterarCurso(dados, id) {
    const { nome, descricao, categoria, url } = dados;

    const busca = await Cursos.findByPk(id);

    if (!busca) {
      return {
        status: 400,
        data: 'Curso não encontrado!'
      };
    }

    busca.update({
      nome,
      descricao,
      categoria,
      url
    });

    return {
      status: 200,
      data: 'Curso alterado com sucesso!'
    };
  }

  async remover(id) {
    const busca = await Cursos.findByPk(id);

    if (!busca) {
      return {
        status: 400,
        data: 'Curso não encontrado'
      };
    }

    busca.update({
      desativado_em: new Date()
    });

    return {
      status: 200,
      data: 'Curso desativado com sucesso!'
    };
  }
}

export default new CursoService();
