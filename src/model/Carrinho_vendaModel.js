const Carrinho_vendaModel = {

    async listarCarrinho_venda(request, reply, app) {
        try {
            app.pg.query('SELECT * FROM carrinho_venda', function onResult(err, result) {
                if (err) {
                    reply.status(500).send(err);
                }
                else if (result.rows.length > 0) {
                    reply.status(200).send(result.rows)
                }
                else {
                    reply.status(204).send({ mensagem: 'Nenhum carrinho venda encontrado' })
                }
            })
        } catch (error) {
            console.error('Erro ao conectar no banco: ', error);
        }
    },

    async listarCarrinho_vendaPorId(request, reply, app) {
        try {
            app.pg.query(`SELECT * FROM carrinho_venda WHERE carrinho_venda.id_carrinho_venda = ${Number(request.params.id_carrinho_venda)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    }
                    else if (result.rows.length > 0) {
                        reply.status(200).send(result.rows[0]);
                    }
                    else {
                        reply.status(204).send({ mensagem: 'Nenhum carrinho venda encontrado' })
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async inserirCarrinho_venda(request, reply, app) {
        try {
            app.pg.query(`INSERT INTO carrinho_venda (usuario_carrinho_id, produto_carrinho_id, quantidade, data_adicao)
                        VALUES (${Number(request.body.usuario_carrinho_id)}, ${Number(request.body.produto_carrinho_id)}, '${request.body.quantidade}', '${request.body.data_adicao}')`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(200).send({ mensagem: 'Item inserido no carrinho' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async atualizarCarrinho_venda(request, reply, app) {
        try {
            app.pg.query(`UPDATE carrinho_venda SET usuario_carrinho_id = ${Number(request.body.usuario_carrinho_id)} WHERE carrinho_venda.id_carrinho_venda = ${Number(request.params.id_carrinho_venda)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.stauts(200).send({ mensagem: 'Item atualizado no carrinho' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    },

    // async excluirVendedor(request, reply, app){
    //     try {
    //         app.pg.query(`DELETE FROM vendedor WHERE vendedor.id_vendedor = ${Number(request.params.id_vendedor)}`,
    //     function onResult(err, result){
    //         if (err) {
    //             reply.send(err)
    //         } else {
    //             reply.send({ mensagem: 'Vendedor excluído com sucesso '});
    //         }
    //     })
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco de dados: ", error);
    //     }
    // }

    async excluirCarrinho_venda(request, reply, app) {
        try {
            app.pg.query(`DELETE FROM carrinho_venda WHERE carrinho_venda.id_carrinho_venda = ${Number(request.params.id_carrinho_venda)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(200).send({ mensagem: 'Item excluído do carrinho' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    }
}

module.exports = Carrinho_vendaModel;