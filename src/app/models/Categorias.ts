import Sequelize from 'sequelize';

const { Model } = require('sequelize');

class Categorias extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING(255),
        deletado_em: Sequelize.DATE
      },
      {
        sequelize,
        tableName: 'tb_categorias',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
      }
    );

    return this;
  }
}

export default Categorias;
