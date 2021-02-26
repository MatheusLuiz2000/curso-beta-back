import Categorias from '../models/Categorias';

class CategoriaService {
  async listar() {
    const busca = await Categorias.findAll({
      where: {
        desativado_em: null
      }
    });

    return {
      status: 200,
      data: busca
    };
  }
}

export default new CategoriaService();
