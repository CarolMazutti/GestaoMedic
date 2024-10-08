const EstoqueModel = {

    async listarEstoque(request, reply, app) {
        try {
            app.pg.query('SELECT * from Estoque', function onResult(err, result) {
                
                if (err){
                    reply.status(500).send(err);
                } 
                else if (result.rows.length > 0) {
                    reply.status(200).send(result.rows);
                } 
                else{
                    reply.status(204).send({ mensagem: 'Nenhum estoque encontrado' });
                }
                
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarEstoquePorId(request, reply, app) {
        try {
            app.pg.query(`SELECT * FROM estoque WHERE estoque.id_estoque = ${Number(request.params.id_estoque)}`, function onResult(err, result) {
                if (err) {
                    reply.status(500).send(err);
                } 
                else if (result.rows.length > 0) {
                    reply.status(200).send(result.rows)
                } 
                else{
                    reply.status(204).send({mensagem: 'Nenhum estoque encontrado'})
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async inserirEstoque(request, reply, app) {
        try {
            app.pg.query(`INSERT INTO estoque (produto_estoque_id, quantidade, data_entrada)
                        VALUES (${Number(request.body.produto_estoque_id)}, '${request.body.quantidade}', '${request.body.data_entrada}')`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(200).send({ mensagem: 'Produto inserido no estoque com sucesso' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async atualizarEstoque(request, reply, app) {
        try {
            let ajusteQuantidade = request.body.tipo_movimentacao === 'entrada' ? Number(request.body.quantidade) : Number(-request.body.quantidade);

            app.pg.query(`UPDATE estoque SET quantidade = ${ajusteQuantidade} WHERE produto_estoque_id = ${request.body.id_produto}`,
                function (err, result) {
                    if (err) {
                        reply.status(500).send(err);
                    } else {
                        reply.status(200).send({ mensagem: 'Estoque atualizado com sucesso' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async excluirEstoque(request, reply, app) {
        try {
            app.pg.query(`DELETE FROM estoque WHERE estoque.id_estoque = ${Number(request.params.id_estoque)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.stauts(500).send(err)
                    } else {
                        reply.stauts(200).send({ mensagem: 'Estoque excluído com sucesso' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    }
}

module.exports = EstoqueModel;