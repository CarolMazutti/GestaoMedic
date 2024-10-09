const ClienteModel = {
    async listarCliente(request, reply, app) {
        try {
            //Faz a consulta no banco e retorna todas as linhas de informação
            app.pg.query('SELECT * FROM cliente', function onResult(err, result) {
                if (err) {
                    reply.status(500).send(err);
                }
                else if (result.rows.length > 0) {
                    reply.status(200).send(result.rows);
                }
                else {
                    reply.status(204).send({ mensagem: 'Nenhum cliente foi encontrado' })
                }
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarClientePorId(request, reply, app) {
        try {
            //Faz a consulta no banco e retorna a informação
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`SELECT * FROM cliente WHERE cliente.id_cliente = ${Number(request.params.id_cliente)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    }
                    else if (result.rows.length > 0) {
                        reply.status(200).send(result.rows[0]);
                    }
                    else {
                        reply.status(204).send({ mensagem: 'Nenhum cliente foi encontrado' })
                    }
                });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async inserirCliente(request, reply, app) {
        try {
            //Faz a inserção no banco e retorna uma mensagem se der certo
            app.pg.query(`INSERT INTO cliente (nome, cpf, email, telefone, endereco, cidade_cliente_id)
                        VALUES ('${request.body.nome}', '${request.body.cpf}', '${request.body.email}', '${request.body.telefone}', '${request.body.endereco}', ${Number(request.body.cidade_cliente_id)})`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(200).send({ mensagem: 'Cliente inserido com sucesso' });
                    }
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async atualizarCliente(request, reply, app) {
        try {
            //Faz a atualização no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`
            UPDATE cliente SET 
            nome = '${request.body.nome}',
            cpf = '${request.body.cpf}',
            email= '${request.body.email}',
            telefone = '${request.body.telefone}',
            endereco = '${request.body.endereco}',
            cidade_cliente_id = ${Number(request.body.cidade_cliente_id)}
            WHERE cliente.id_cliente = ${Number(request.params.id_cliente)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(200).send({ mensagem: 'Cliente atualizado com sucesso' });
                    }
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async excluirCliente(request, reply, app) {
        try {
            //Faz a exclusão no banco e retorna uma mensagem se der certo
            //A informação do id que vem do request é uma string, Number serve para mudar essa string para o tipo Number e assim não gera erro na consulta
            app.pg.query(`DELETE FROM cliente WHERE cliente.id_cliente = ${Number(request.params.id_cliente)}`,
                function onResult(err, result) {
                    if (err) {
                        reply.status(500).send(err)
                    } else {
                        reply.status(200).send({ mensagem: 'Cliente excluído com sucesso' });
                    }
                })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
        }
    }
}

module.exports = ClienteModel;