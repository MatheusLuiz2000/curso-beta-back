module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_logins', {
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
      uuid: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      salt: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      md5: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      sha1: {
        type: Sequelize.STRING(155),
        allowNull: false
      },
      sha256: {
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
    return queryInterface.dropTable('tb_logins');
  }
};
