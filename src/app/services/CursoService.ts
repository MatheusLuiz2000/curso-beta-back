import { Op } from 'sequelize';
import Categorias from '../models/Categorias';
import Cursos from '../models/Cursos';

class CursoService {
  async listar(query) {
    const filtro =
      query.valor && query.opcao !== 'categoria'
        ? {
            [query.opcao]: {
              [Op.like]: `%${query.valor}%`
            }
          }
        : {};

    const filtroCategoria =
      query.opcao === 'categoria'
        ? {
            nome: {
              [Op.like]: `%${query.valor}%`
            }
          }
        : {};

    const busca = await Cursos.findAndCountAll({
      where: {
        desativado_em: null,
        ...filtro
      },
      include: [
        {
          model: Categorias,
          as: 'categorias',
          where: {
            ...filtroCategoria
          }
        }
      ],
      limit: parseInt(query.limit, 10),
      offset: parseInt(query.offset, 10)
    });

    return {
      status: 200,
      data: busca
    };
  }

  async listarCurso(id) {
    if (!id) {
      return {
        status: 400,
        data: 'ID do curso não fornecido'
      };
    }

    const buscaCurso = await Cursos.findOne({
      where: {
        id,
        desativado_em: null
      },
      include: [
        {
          model: Categorias,
          as: 'categorias',
          attributes: ['nome']
        }
      ]
    });

    if (!buscaCurso) {
      return {
        status: 204
      };
    }

    const buscaCategorias = await Categorias.findAll({
      where: {
        desativado_em: null
      }
    });

    return {
      status: 200,
      data: {
        curso: buscaCurso,
        categorias: buscaCategorias
      }
    };
  }

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
