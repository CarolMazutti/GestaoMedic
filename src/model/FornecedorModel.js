const FornecedorModel = {
    async listarFornecedor(request, reply, app){
        try {
            app.pg.query('SELECT * FROM fornecedor', function onResult (err, result){
                reply.send(result.rows);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async listarFornecedorPorId(request, reply, app) {
        try {
            app.pg.query(`SELECT * FROM fornecedor WHERE fornecedor.id_fornecedor = ${Number(request.params.id_fornecedor)}`, function onResult(err, result) {
                reply.send(err || result.rows[0]);
            });
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error)
            throw error;
        }
    },

    async inserirFornecedor(request, reply, app){
        try {
            app.pg.query(`INSERT INTO fornecedor (nome, cnpj, email, telefone, endereco, cidade_fornecedor_id) 
                        VALUES ('${request.body.nome}', '${request.body.cnpj}', '${request.body.email}', '${request.body.telefone}', '${request.body.endereco}', ${Number(request.body.cidade_fornecedor_id)})`,
            function onResult(err, result){
                if (err) {
                    reply.send(err)
                } else {
                    reply.send({ mensagem: 'Fornecedor inserido com sucesso' });
                }
            }
        )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async atualizarFornecedor(request, reply, app) {
        try {
            app.pg.query(`
            UPDATE fornecedor SET 
            nome = '${request.body.nome}',
            cnpj = '${request.body.cnpj}',
            email = '${request.body.email}',
            telefone = '${request.body.telefone}',
            endereco = '${request.body.endereco}'
            WHERE fornecedor.id_fornecedor = ${Number(request.params.id_fornecedor)}`,
                function onResult(err, result) {
                    if (err) {
                        err.send(err)
                    } else {
                        reply.send({ mensagem: 'Fornecedor atualizado com sucesso' });
                    }
                }
            )
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async excluirFornecedor(request, reply, app){
        try {
            app.pg.query(`DELETE FROM fornecedor WHERE fornecedor.id_fornecedor = ${Number(request.params.id_fornecedor)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Fornecedor excluído com sucesso' });
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    }
}

module.exports = FornecedorModel;