import Sequelize from 'sequelize';

const { Model } = require('sequelize');

class Cursos extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING(155),
        descricao: Sequelize.STRING(155),
        categoria: Sequelize.INTEGER,
        url: Sequelize.STRING(155)
      },
      {
        sequelize,
        tableName: 'tb_cursos',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
      }
    );

    return this;
  }
}

export default Cursos;
