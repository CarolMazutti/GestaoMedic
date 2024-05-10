const ProdutoModel = {
    async listarProduto(request, reply, app){
        try {
            //Faz a consulta no banco e retorna todas as linhas de informação
            app.pg.query('SELECT * FROM Produto', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async listarProdutoPorId(request, reply, app) {
        try {
            //Faz a consulta no banco e retorna a informação
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`SELECT * FROM produto WHERE produto.id_produto = ${Number(request.params.id_produto)}`, function onResult(err, result) {
                reply.send(err || result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async inserirProduto(request, reply, app){
        try {
            //Faz a inserção no banco e retorna uma mensagem se der certo
            app.pg.query(`INSERT INTO produto (nome, descricao, preco, quantidade, fornecedor_produto_id) 
                        VALUES ('${request.body.nome}', '${request.body.descricao}', '${request.body.preco}', '${request.body.quantidade}', ${Number(request.body.fornecedor_produto_id)})`,
            function onResult(err, result){
                if(err){
                    reply.send(err)
                }else{
                reply.send({ mensagem: 'Produto inserido com sucesso' });
                }
            }
        )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async atualizarProduto(request, reply, app) {
        try {
            //Faz a atualização no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
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
            //Faz a exclusão no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
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

module.exports = ProdutoModel;