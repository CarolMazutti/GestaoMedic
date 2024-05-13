const CidadeModel = {
 
    async listarCidade(request, reply, app){
        try {
            app.pg.query('SELECT * FROM cidade', function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows)
                }
            })
        } catch (error) {
            console.error('Erro ao conectar no banco', error)
        }
    },

    async listarCidadePorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM Cidade where cidade.id_cidade = ${Number(request.params.id_cidade)}`, function onResult(err, result){
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

    async inserirCidade(request, reply, app){
        try {
            app.pg.query(`INSERT INTO cidade (nome_cidade, estado_cidade_id)
                        VALUES ('${request.body.nome_cidade}', ${Number(request.body.estado_cidade_id)})`,
                    function onResult(err,result){
                        if (err) {
                            reply.send(err)
                        } else {
                        reply.send({ mensagem: 'Cidade inserido com sucesso' });
                        }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async atualizarCidade(request, reply, app){
        try {
            app.pg.query(`UPDATE cidade SET nome_cidade = '${request.body.nome_cidade}' WHERE cidade.id_cidade = ${Number(request.params.id_cidade)}`,
        function  onResult(err, result) {
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Cidade atualizada com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async excluirCidade(request, reply, app){
        try {
            app.pg.query(`DELETE FROM cidade WHERE cidade.id_cidade = ${Number(request.params.id_cidade)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Cidade excluída com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)            
        }
    },
}

module.exports = CidadeModel;