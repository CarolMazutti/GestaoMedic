const EstadoModel = {
    async listarEstado(request, reply, app){
        try {
            //Faz a consulta no banco e retorna todas as linhas de informação
            app.pg.query('SELECT * FROM Estado', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async listarEstadoPorId(request, reply, app) {
        try {
            //Faz a consulta no banco e retorna a informação
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`SELECT * FROM Estado WHERE estado.id_estado = ${Number(request.params.id_estado)}`, function onResult(err, result) {
                reply.send(err || result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async inserirEstado(request, reply, app){
        try {
            //Faz a inserção no banco e retorna uma mensagem se der certo
            app.pg.query(`INSERT INTO estado (nome, uf) 
                        VALUES ('${request.body.nome}', '${request.body.uf})`,
            function onResult(err, result){
                if(err){
                    reply.send(err)
                }else{
                reply.send({ mensagem: 'Estado inserido com sucesso' });
                }
            }
        )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
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

module.exports = EstadoModel;