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
                    reply.send(result.rows[0]);
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

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

    async atualizarUsuario(request, reply, app){
        try {
            app.pg.query(`
            UPDATE usuario SET 
            nome = '${request.body.nome}',
            login_user = '${request.body.login_user}',
            perfil = '${request.body.perfil}' 
            WHERE usuario.id_usuario = ${Number(request.params.id_usuario)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Usuário atualizado com sucesso '});
            }
        })

        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error)
        }
    },

    async excluirUsuario(request, reply, app){
        try {
            app.pg.query(`DELETE FROM usuario WHERE usuario.id_usuario = ${Number(request.params.id_usuario)}`,
            function onResult(err, result){
                if (err) {
                    reply.send(err)
                } else {
                    reply.send({ mensagem: 'Usuário excluído com sucesso' });
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error)
        }
    },

    async autenticarUsuario(login, senha) {
        try {
          const query = `SELECT * FROM usuario WHERE login_user = $1 AND senha_user = $2`;
          const result = await app.pg.query(query, [login, senha]);
          if (result.rows.length > 0) {
            return result.rows[0];
          } else {
            return null;
          }
        } catch (error) {
          console.error("Erro ao autenticar usuário", error);
          return null;
        }
      },

    // async autenticarUsuario(login, senha) {
    //     console.log("Autenticando usuário...");
    //     try {
    //       const query = `SELECT * FROM usuario WHERE login_user = $1 AND senha_user = $2`;
    //       console.log("Executando consulta ao banco de dados...");
    //       const result = await app.pg.query(query, [login, senha]);
    //       console.log("Resultado da consulta:", result.rows);
    //       if (result.rows.length > 0) {
    //         console.log("Usuário autenticado com sucesso!");
    //         return result.rows[0];
    //       } else {
    //         console.log("Usuário não encontrado ou senha incorreta.");
    //         return null;
    //       }
    //     } catch (error) {
    //       console.error("Erro ao autenticar usuário", error);
    //       return null;
    //     }
    //   },
}

module.exports = UsuarioModel;