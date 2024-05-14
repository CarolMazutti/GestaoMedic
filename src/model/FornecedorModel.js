const FornecedorModel = {
    async listarFornecedor(request, reply, app){
        try {
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