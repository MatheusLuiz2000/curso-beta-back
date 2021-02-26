module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert('tb_categorias', [
            {
                nome: 'Direito',
                criado_em: new Date(),
                atualizado_em: new Date()
            },
            {
                nome: 'Perícia Judicial',
                criado_em: new Date(),
                atualizado_em: new Date()
            },
            {
                nome: 'Desenvolvimento Pessoal',
                criado_em: new Date(),
                atualizado_em: new Date()
            },
            {
                nome: 'Gestão de Pessoas',
                criado_em: new Date(),
                atualizado_em: new Date()
            },
            {
                nome: 'Cálculos',
                criado_em: new Date(),
                atualizado_em: new Date()
            }
        ], {});
    },
    down: queryInterface => {
        return queryInterface.bulkDelete('tb_categorias', null, {});
    }
};
