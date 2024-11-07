const Controle_compraModel = {

    async listarControle_compra(request, reply, app){
        try {
            app.pg.query('SELECT * FROM controle_compra', function onResult(err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarControle_compraPorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM controle_compra WHERE controle_compra.id_controle_compra = ${Number(request.params.id_controle_compra)}`,
        function onResult(err, result){
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

    async inserirControle_compra(request, reply, app){
        try {
            const query = `INSERT INTO controle_compra (id_produto, quantidade, valor_unitario, valor_total, data_compra, nfe, valor_venda, fornecedor)
                        VALUES (${Number(request.body.id_produto)}, '${request.body.quantidade}', '${request.body.valor_unitario}', '${request.body.valor_total}', '${request.body.data_compra}', '${request.body.nfe}', '${request.body.valor_venda}', ${Number(request.body.fornecedor)})`
            console.log("query: ", query)
            app.pg.query(`INSERT INTO controle_compra (id_produto, quantidade, valor_unitario, valor_total, data_compra, nfe, valor_venda, fornecedor)
                        VALUES (${Number(request.body.id_produto)}, '${request.body.quantidade}', '${request.body.valor_unitario}', '${request.body.valor_total}', '${request.body.data_compra}', '${request.body.nfe}', '${request.body.valor_venda}', ${Number(request.body.fornecedor)})`,
        function onResult(err, result){
            if (err) {

                reply.send(err)
            } else {
                reply.send({ mensagem: 'Compra inserida com sucesso: '});
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async atualizarControle_compra(request, reply, app){
        try {
            app.pg.query(`UPDATE controle_compra SET id_produto = ${Number(request.body.id_produto)} WHERE controle_compra.id_controle_compra = ${Number(request.params.id_controle_compra)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Compra atualizada com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ". error);
        }
    },

    async excluirControle_compra(request, reply, app){
        app.pg.query(`DELETE FROM controle_compra WHERE controle_compra.id_controle_compra = ${Number(request.params.id_controle_compra)}`,
    function onResult(err, result){
        if (err) {
            reply.send(err)
        } else {
            reply.send({ mensagem: 'Compra excluída com sucesso '});
        }
    })
    }
}

module.exports = Controle_compraModel;