const FornecedorModel = {
    async listarFornecedor(request, reply, app){
        try {
            //Faz a consulta no banco e retorna todas as linhas de informação
            app.pg.query('SELECT * FROM fornecedor', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async listarFornecedorPorId(request, reply, app) {
        try {
            //Faz a consulta no banco e retorna a informação
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`SELECT * FROM fornecedor WHERE fornecedor.idfornecedor = ${Number(request.params.idfornecedor)}`, function onResult(err, result) {
                reply.send(err || result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async inserirFornecedor(request, reply, app){
        try {
            //Faz a inserção no banco e retorna uma mensagem se der certo
            app.pg.query(`INSERT INTO fornecedor (idfornecedor, nomefornecedor) VALUES ('${request.body.idfornecedor}', '${request.body.nomefornecedor}')`,
            function onResult(err, result){
                reply.send({ mensagem: 'fornecedor inserido com sucesso' });
            }
        )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async atualizarFornecedor(request, reply, app) {
        try {
            //Faz a atualização no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`UPDATE fornecedor SET nomefornecedor = '${request.body.nomefornecedor}' WHERE fornecedor.idfornecedor = ${Number(request.params.idfornecedor)}`,
                function onResult(err, result) {
                    reply.send({ mensagem: 'fornecedor atualizado com sucesso' });
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async excluirFornecedor(request, reply, app){
        try {
            //Faz a exclusão no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`DELETE FROM fornecedor WHERE fornecedor.idfornecedor = ${Number(request.params.idfornecedor)}`,
        function onResult(err, result){
            reply.send({ mensagem: 'fornecedor excluído com sucesso' });
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    }
}

module.exports = FornecedorModel;