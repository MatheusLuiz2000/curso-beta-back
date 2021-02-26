module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert('tb_administradores', [
            {
                email: 'adm@cursobeta.com',
                senha: '$argon2i$v=19$m=4096,t=3,p=1$I37t/byeOBJ4QCwUHALM/A$rQsmio5sQklwLtM0vEtr5iLzVZ5bYUY8rIsKBUDuWRolTxEz26wywen0UFnlRQ25+OGneC+vgcSZDvTupwCwExewRMcjbWpF/oxa/ZJF0vTO17mS0dZULTLHFyqxI87pW+EArQ',
                criado_em: new Date(),
                atualizado_em: new Date()
            }
        ], {});
    },
    down: queryInterface => {
        return queryInterface.bulkDelete('tb_administradores', null, {});
    }
};
