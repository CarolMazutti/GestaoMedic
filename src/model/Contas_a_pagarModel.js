const Contas_a_pagarModel = {

    async listarContas_a_pagar(request, reply, app){
        try {
            app.pg.query('SELECT * FROM contas_a_pagar', function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows)
                }
            })
        } catch (error) {
            console.log('Erro ao conectar no banco', error)
        }
    },

        async listarContas_a_pagarPorId(request, reply, app){
            try {
                app.pg.query(`SELECT * FROM contas_a_pagar WHERE contas_a_pagar.id_contas_pagar = ${Number(request.params.id_contas_pagar)}`, function onResult(err, result){
                    if (err) {
                        reply.send(err);
                    } else {
                        reply.send(result.rows)
                    }
                })
            } catch (error) {
                console.error("Erro ao conectar no banco: ", error)
            }
        },

        async inserirContas_a_pagar(request, reply, app){
            try {
                app.pg.query(`INSERT INTO contas_a_pagar (fornecedor_contas_pagar_id, valor, data_vencimento, parcela, nfe)
                            VALUES (${Number(request.body.fornecedor_contas_pagar_id)}, '${request.body.valor}', '${request.body.data_vencimento}', '${request.body.parcela}', '${request.body.nfe}')`,
                        function onResult(err, result){
                            if (err) {
                                reply.send(err)
                            } else {
                                return {success: true};
                                // reply.send({mensagem: 'Contas a pagar inserido com sucesso' })
                            }
                        })
            } catch (error) {
                console.error("Erro ao conectar no banco: ", error)
            }
        },

    async atualizarContas_a_pagar(request, reply, app){
        try {
            app.pg.query(`UPDATE contas_a_pagar set fornecedor_contas_pagar_id = ${Number(request.body.fornecedor_contas_pagar_id)} WHERE contas_a_pagar.id_contas_pagar = ${Number(request.params.id_contas_pagar)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Contas a pagar atualizada com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async excluirContas_a_pagar(request, reply, app){
        try {
            app.pg.query(`DELETE FROM contas_a_pagar WHERE contas_a_pagar.id_contas_pagar = ${Number(request.params.id_contas_pagar)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Contas a pagar excluída com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)            
        }
    },
}

module.exports = Contas_a_pagarModel;