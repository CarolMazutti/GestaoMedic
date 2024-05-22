const Controle_receituarioModel = {

    async listarControle_receituario(request, reply, app){
        try {
            app.pg.query('SELECT * FROM Controle_receituario', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarControle_receituarioPorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM controle_receituario WHERE controle_receituario.id_receituario = ${Number(request.params.id_receituario)}`, function onResult(err, result){
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

    async inserirControle_receituario(request, reply, app){
        try {
            app.pg.query(`INSERT INTO controle_receituario (produto_receituario_id, receituario, quantidade, data_validade)
                        VALUES (${Number(request.body.produto_receituario_id)}, '${request.body.receituario}', '${request.body.quantidade}', '${request.body.data_validade}')`,
                    function onResult(err, result){
                        if (err) {
                            reply.send(err)
                        } else {
                            reply.send({ mensagem: 'Receituário inserido com sucesso' });
                        }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", erro);
        }
    },

    async atualizarControle_receituario(request, reply, app){
        try {
            app.pg.query(`UPDATE controle_receituario SET produto_receituario_id = ${Number(request.body.produto_receituario_id)} WHERE controle_receituario.id_receituario = ${Number(request.params.id_receituario)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Receituario atualizado com sucesso'});
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async excluirControle_receituario(request, reply, app){
        try {
            app.pg.query(`DELETE FROM controle_receituario WHERE controle_receituario.id_receituario = ${Number(request.params.id_receituario)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Receituario excluído com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    }
}

module.exports = Controle_receituarioModel;