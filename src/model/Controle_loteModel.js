const Controle_loteModel = {

    async listarControle_lote(request, reply, app){
        try {
            app.pg.query('SELECT * FROM controle_lote', function onResult(err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarControle_lotePorId(request, reply, app){
        try {
            app.pg.query(`SELECT *FROM controle_lote WHERE controle_lote.id_lote = ${Number(request.params.id_lote)}`, function onResult(err, result){
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

    async inserirControle_lote(request, reply, app){
        try {
            app.pg.query(`INSERT INTO controle_lote (produto_lote_id, lote, quantidade, data_validade)
                        VALUES (${Number(request.body.produto_lote_id)}, '${request.body.lote}', '${request.body.quantidade}', '${request.body.data_validade}')`,
                    function onResult(err, result){
                        if (err) {
                            reply.send(err)
                        } else {
                            reply.send({ mensagem: 'Lote inserido com sucesso' });
                        }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", erro);
        }
    },

    async atualizarControle_lote(request, reply, app){
        try {
            app.pg.query(`UPDATE controle_lote SET produto_lote_id = ${Number(request.body.produto_lote_id)} WHERE controle_lote.id_lote = ${Number(request.params.id_lote)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Lote atualizado com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async excluirControle_lote(request, reply, app){
        try {
            app.pg.query(`DELETE FROM controle_lote WHERE controle_lote.id_lote = ${Number(request.params.id_lote)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Lote excluído com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    }
}

module.exports = Controle_loteModel;