module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_locations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      postcode: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      latitude: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      longitude: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      timezone_offset: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      timezone_description: {
        type: Sequelize.STRING(155),
        allowNull: false
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
    return queryInterface.dropTable('tb_locations');
  }
};
