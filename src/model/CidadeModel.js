const CidadeModel = {

    async listarCidade(request, reply, app) {
        try {
            app.pg.query('SELECT * FROM cidade', function onResult(err, result) {
                if (err) {
                    reply.status(500).send(err);
                }
                else if (result.rows.length > 0) {
                    reply.status(200).send(result.rows);
                }
                else {
                    reply.status(204).send({ mensagem: 'Nenhuma cidade encontrada' });
                }
            })
        } catch (error) {
            console.error('Erro ao conectar no banco', error)
        }
    },

    async listarCidadePorId(request, reply, app) {
        try {
            app.pg.query(`SELECT * FROM Cidade WHERE cidade.id_cidade = ${Number(request.params.id_cidade)}`, function onResult(err, result) {
                if (err) {
                    reply.stauts(500).send(err);
                }
                else if (result.rows.length > 0) {
                    reply.status(200).send(result.rows[0])
                }
                else {
                    reply.status(204).send({ mensagem: 'Nenhuma cidade encontrada' })
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async inserirCidade(request, reply, app) {
        try {
            app.pg.query(`INSERT INTO cidade (nome_cidade, estado_cidade_id)
                        VALUES ('${request.body.nome_cidade}', ${Number(request.body.estado_cidade_id)})`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(201).send({ mensagem: 'Cidade inserida com sucesso' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    // async atualizarCidade(request, reply, app){
    //     try {
    //         app.pg.query(`UPDATE cidade SET nome_cidade = '${request.body.nome_cidade}' WHERE cidade.id_cidade = ${Number(request.params.id_cidade)}`,
    //     function  onResult(err, result) {
    //         if (err) {
    //             reply.send(err)
    //         } else {
    //             reply.send({ mensagem: 'Cidade atualizada com sucesso' });
    //         }
    //     })
    //     } catch (error) {
    //         console.error("Erro ao conectar no banco: ", error)
    //     }
    // },

    async atualizarCidade(request, reply, app) {
        try {
            app.pg.query(`
            UPDATE cidade SET 
                nome_cidade = '${request.body.nome_cidade}', 
                estado_cidade_id = ${Number(request.body.estado_cidade_id)}
            WHERE cidade.id_cidade = ${Number(request.params.id_cidade)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    }
                    else if (result.rows.length > 0) {
                        reply.status(200).send({ mensagem: 'Cidade atualizada com sucesso' });
                    }
                    else {
                        reply.status(404).send({ mensagem: 'Cidade não encontrada' })
                    }
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },

    async excluirCidade(request, reply, app) {
        try {
            app.pg.query(`DELETE FROM cidade WHERE cidade.id_cidade = ${Number(request.params.id_cidade)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    }
                    else if (result.rows.length > 0) {
                        reply.status(200).send({ mensagem: 'Cidade excluída com sucesso' });
                    }
                    else {
                        reply.status(404).send({ mensagem: 'Cidade não encontrada' })
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    },
}

module.exports = CidadeModel;