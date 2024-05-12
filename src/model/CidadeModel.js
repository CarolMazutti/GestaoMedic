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

    // async inserirEstado(request, reply, app){
    //     try {
    //         //Faz a inserção no banco e retorna uma mensagem se der certo
    //         app.pg.query(`INSERT INTO estado (nome, uf) 
    //                     VALUES ('${request.body.nome}', '${request.body.uf}')`,
    //         function onResult(err, result){
    //             if(err){
    //                 reply.send(err)
    //             }else{
    //             reply.send({ mensagem: 'Estado inserido com sucesso' });
    //             }
    //         }
    //     )
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco: ", error)
    //         throw error;
    //     }
    // },

    async inserirCidade(request, reply, app){
        try {
            app.pg.query(`INSERT INTO cidade (nome_cidade, estado_cidade_id)
                        VALUES ('${request.body.nome_cidade}', '${request.body.estado_cidade_id}')`,
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

    async atualizarEstado(request, reply, app) {
        try {
            //Faz a atualização no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`UPDATE Estado SET nome = '${request.body.nome}' WHERE estado.id_Estado = ${Number(request.params.id_estado)}`,
                function onResult(err, result) {
                    if(err){
                        reply.send(err)
                    }else{
                    reply.send({ mensagem: 'Estado atualizado com sucesso' });
                    }
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async excluirEstado(request, reply, app){
        try {
            //Faz a exclusão no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`DELETE FROM Estado WHERE estado.id_Estado = ${Number(request.params.id_estado)}`,
        function onResult(err, result){
            if(err){
                reply.send(err)
            }else{
            reply.send({ mensagem: 'Estado excluído com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    }
}

module.exports = CidadeModel;