const UsuarioModel = {

    async listarUsuario(request, reply, app){
        try {
            app.pg.query('SELECT * FROM usuario', function onResult(err, result){
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
    
    async listarUsuarioPorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM usuario WHERE usuario.id_usuario = ${Number(request.params.id_usuario)}`, function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows);
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    // async inserirContas_a_receber(request, reply, app){
    //     try {
    //         app.pg.query(`INSERT INTO contas_a_receber (cliente_contas_receber_id, valor, data_vencimento, data_recebimento)
    //                     VALUES (${Number(request.body.cliente_contas_receber_id)}, '${request.body.valor}', '${request.body.data_vencimento}', '${request.body.data_recebimento}')`,
    //                 function onResult(err, result){
    //                     if (err) {
    //                         reply.send(err)
    //                     } else {
    //                         reply.send({ mensagem: 'Contas a receber inserido com sucesso' })
    //                     }
    //                 })
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco: ", error)
    //     }
    // },

    async inserirUsuario(request, reply, app){
        try {
            app.pg.query(`INSERT INTO usuario (nome, login_user, senha_user, perfil)
                        VALUES ('${request.body.nome}', '${request.body.login_user}', '${request.body.senha_user}', '${request.body.perfil}')`,
                    function onResult(err,result){
                        if (err) {
                            reply.send(err)
                        } else {
                            reply.send({ mensagem: 'Usuario inserido com sucesso' })
                        }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

async atualizarContas_a_receber(request, reply, app){
    try {
        app.pg.query(`UPDATE contas_a_receber set cliente_contas_receber_id = ${Number(request.body.cliente_contas_receber_id)} WHERE contas_a_receber.id_contas_receber = ${Number(request.params.id_contas_receber)}`,
    function onResult(err, result){
        if (err) {
            reply.send(err)
        } else {
            reply.send({ mensagem: 'Contas a receber atualizada com sucesso' });
        }
    })
    } catch (error) {
        console.error("Erro ao conectar no banco: ", error)
    }
},

async excluirContas_a_receber(request, reply, app){
    try {
        app.pg.query(`DELETE FROM contas_a_receber WHERE contas_a_receber.id_contas_receber = ${Number(request.params.id_contas_receber)}`,
    function onResult(err, result){
        if (err) {
            reply.send(err)
        } else {
            reply.send({ mensagem: 'Contas a receber excluída com sucesso' });
        }
    })
    } catch (error) {
        console.error("Erro ao conectar no banco: ", error)            
    }
},
}

module.exports = UsuarioModel;