const VendaModel = {

    async listarVenda(request, reply, app){
        try {
            app.pg.query('SELECT * FROM venda', function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows)
                }
            })
        } catch (error) {
            console.error('Erro ao conectar no banco: ', error);
        }
    },

    async listarVendaPorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM venda WHERE venda.id_venda = ${Number(request.params.id_venda)}`, function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows);
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    },

    async inserirVenda(request, reply, app){
        try {
            app.pg.query(`INSERT INTO venda (carrinho_venda_venda_id, data_venda, valor_total, condicao_de_pagamento)
                        VALUES (${Number(request.body.carrinho_venda_venda_id)}, '${request.body.data_venda}', '${request.body.valor_total}', '${request.body.condicao_de_pagamento}')`,
                    function onResult(err, result){
                        if (err) {
                            reply.send(err)
                        } else {
                            reply.send({ mensagem: 'Venda inserida com sucesso' })
                        }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async atualizarVenda(request, reply, app){
        try {
            app.pg.query(`UPDATE venda set carrinho_venda_venda_id = ${Number(request.body.carrinho_venda_venda_id)} WHERE venda.id_venda = ${Number(request.params.id_venda)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Venda atualizada com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    },

    // async excluirUsuario(request, reply, app){
    //     try {
    //         app.pg.query(`DELETE FROM usuario WHERE usuario.id_usuario = ${Number(request.params.id_usuario)}`,
    //         function onResult(err, result){
    //             if (err) {
    //                 reply.send(err)
    //             } else {
    //                 reply.send({ mensagem: 'Usuário excluído com sucesso' });
    //             }
    //         })
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco de dados: ", error)
    //     }
    // },

    async excluirVenda(request, reply, app){
        try {
            app.pg.query(`DELETE FROM venda WHERE venda.id_venda = ${Number(request.params.id_venda)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Venda excluída com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    }
}

module.exports = VendaModel;