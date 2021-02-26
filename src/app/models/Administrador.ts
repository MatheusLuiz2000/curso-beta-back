import Sequelize from 'sequelize';

const { Model } = require('sequelize');

class Administrador extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING(255),
        senha: Sequelize.STRING(255),
        desativado_em: Sequelize.DATE
      },
      {
        sequelize,
        tableName: 'tb_administradores',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
      }
    );

    return this;
  }
}

export default Administrador;
