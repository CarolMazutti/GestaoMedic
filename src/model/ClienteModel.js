const ClienteModel = {
    async listarCliente(request, reply, app){
        try {
            //Faz a consulta no banco e retorna todas as linhas de informação
            app.pg.query('SELECT * FROM cliente', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async listarClientePorId(request, reply, app) {
        try {
            //Faz a consulta no banco e retorna a informação
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`SELECT * FROM cliente WHERE cliente.idCliente = ${Number(request.params.idCliente)}`, function onResult(err, result) {
                reply.send(err || result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async inserirCliente(request, reply, app){
        try {
            //Faz a inserção no banco e retorna uma mensagem se der certo
            app.pg.query(`INSERT INTO cliente (idCliente, nomeCliente) VALUES ('${request.body.idCliente}', '${request.body.nomeCliente}')`,
            function onResult(err, result){
                reply.send({ mensagem: 'Cliente inserido com sucesso' });
            }
        )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async atualizarCliente(request, reply, app) {
        try {
            //Faz a atualização no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`UPDATE cliente SET nomeCliente = '${request.body.nomeCliente}' WHERE cliente.idCliente = ${Number(request.params.idCliente)}`,
                function onResult(err, result) {
                    reply.send({ mensagem: 'Cliente atualizado com sucesso' });
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async excluirCliente(request, reply, app){
        try {
            //Faz a exclusão no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`DELETE FROM cliente WHERE cliente.idCliente = ${Number(request.params.idCliente)}`,
        function onResult(err, result){
            reply.send({ mensagem: 'Cliente excluído com sucesso' });
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    }
}

module.exports = ClienteModel;