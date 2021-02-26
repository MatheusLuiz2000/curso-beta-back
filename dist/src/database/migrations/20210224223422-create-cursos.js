module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tb_cursos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING(155),
                allowNull: false
            },
            descricao: {
                type: Sequelize.STRING(155),
                allowNull: false
            },
            categoria: {
                type: Sequelize.INTEGER,
                references: { model: 'tb_categorias', key: 'id' },
                onUpdate: 'CASCADE',
                allowNull: false
            },
            url: {
                type: Sequelize.STRING(255),
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
        return queryInterface.dropTable('tb_cursos');
    }
};
