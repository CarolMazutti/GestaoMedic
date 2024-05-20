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

    // async inserirProduto(request, reply, app){
    //     try {
    //         app.pg.query(`INSERT INTO produto (nome, descricao, preco, quantidade, fornecedor_produto_id) 
    //                     VALUES ('${request.body.nome}', '${request.body.descricao}', '${request.body.preco}', '${request.body.quantidade}', ${Number(request.body.fornecedor_produto_id)})`,
    //         function onResult(err, result){
    //             if(err){
    //                 reply.send(err)
    //             }else{
    //             reply.send({ mensagem: 'Produto inserido com sucesso' });
    //             }
    //         }
    //     )
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco: ", error)
    //         throw error;
    //     }
    // },

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

    async atualizarProduto(request, reply, app) {
        try {
            app.pg.query(`UPDATE produto SET nome = '${request.body.nome}' WHERE produto.id_produto = ${Number(request.params.id_produto)}`,
                function onResult(err, result) {
                    if(err){
                        reply.send(err)
                    }else{
                    reply.send({ mensagem: 'Produto atualizado com sucesso' });
                    }
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async excluirProduto(request, reply, app){
        try {
            app.pg.query(`DELETE FROM produto WHERE produto.id_produto = ${Number(request.params.id_produto)}`,
        function onResult(err, result){
            if(err){
                reply.send(err)
            }else{
            reply.send({ mensagem: 'Produto excluído com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    }
}

module.exports = EstoqueModel;