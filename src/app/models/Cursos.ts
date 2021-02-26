import Sequelize from 'sequelize';

const { Model } = require('sequelize');

class Cursos extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING(155),
        descricao: Sequelize.STRING(155),
        categoria: Sequelize.INTEGER,
        url: Sequelize.STRING(155),
        desativado_em: Sequelize.DATE
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

  static associate(models) {
    this.belongsTo(models.Categorias, {
      foreignKey: 'categoria',
      as: 'categorias'
    });
  }
}

export default Cursos;
