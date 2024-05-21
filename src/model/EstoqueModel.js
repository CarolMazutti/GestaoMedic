const EstoqueModel = {

    async listarEstoque(request, reply, app){
        try {
            app.pg.query('SELECT * from Estoque', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarEstoquePorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM estoque WHERE estoque.id_estoque = ${Number(request.params.id_estoque)}`, function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows)
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async inserirEstoque(request, reply, app){
        try {
            app.pg.query(`INSERT INTO estoque (produto_estoque_id, quantidade, data_entrada)
                        VALUES (${Number(request.body.produto_estoque_id)}, '${request.body.quantidade}', '${request.body.data_entrada}')`,
                    function onResult(err, result){
                        if (err) {
                            reply.send(err)
                        } else {
                            reply.send({ mensagem: 'Produto inserido no estoque com sucesso'});
                        }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async atualizarEstoque(request, reply, app) {
        try {
            app.pg.query(`UPDATE estoque SET produto_estoque_id = ${Number(request.body.produto_estoque_id)} WHERE estoque.id_estoque = ${Number(request.params.id_estoque)}`,
        function onResult(err,result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Estoque atualizado com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    // async excluirProduto(request, reply, app){
    //     try {
    //         app.pg.query(`DELETE FROM produto WHERE produto.id_produto = ${Number(request.params.id_produto)}`,
    //     function onResult(err, result){
    //         if(err){
    //             reply.send(err)
    //         }else{
    //         reply.send({ mensagem: 'Produto excluído com sucesso' });
    //         }
    //     })
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco: ", error)
    //         throw error;
    //     }
    // }

    async excluirEstoque(request, reply, app) {
        try {
            app.pg.query(`DELETE FROM estoque WHERE estoque.id_estoque = ${Number(request.params.id_estoque)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Estoque excluído com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    }
}

module.exports = EstoqueModel;