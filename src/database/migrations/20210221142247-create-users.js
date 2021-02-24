module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      cell: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      picture_large: {
        type: Sequelize.STRING(155),
        allowNull: true
      },
      picture_medium: {
        type: Sequelize.STRING(155),
        allowNull: true
      },
      picture_thumbnail: {
        type: Sequelize.STRING(155),
        allowNull: true
      },
      id_name: {
        type: Sequelize.STRING(155),
        allowNull: true
      },
      id_value: {
        type: Sequelize.STRING(155),
        allowNull: true
      },
      nat: {
        type: Sequelize.STRING(155),
        allowNull: true
      },
      criado_em: {
        type: Sequelize.DATE,
        allowNull: false
      },
      atualizado_em: {
        type: Sequelize.DATE,
        allowNull: false
      },
      desativado_em: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('tb_users');
  }
};
