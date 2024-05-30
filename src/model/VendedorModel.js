const VendedorModel = {

    async listarVendedor(request, reply, app){
        try {
            app.pg.query('SELECT * FROM vendedor', function onResult(err, result){
                if (err) {
                    reply.send(err);
                } else {
                    reply.send(result.rows)
                }
            })
        } catch (error) {
            console.error(('Erro ao conectar no banco: ', error));
        }
    },

    async listarVendedorPorId(request, reply, app){
        try {
            app.pg.query(`SELECT * FROM vendedor WHERE vendedor.id_vendedor = ${Number(request.params.id_vendedor)}`, function onResult(err, result){
                if (err) {
                    reply.send(err)
                } else {
                    reply.send(result.rows[0]);
                }
            })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async inserirVendedor(request, reply, app){
        try {
            app.pg.query(`INSERT INTO vendedor (usuario_vendedor_id, nome, cpf)
                        VALUES (${Number(request.body.usuario_vendedor_id)}, '${request.body.nome}', '${request.body.cpf}')`,
                    function onResult(err, result){
                        if (err) {
                            reply.send(err)
                        } else {
                            reply.send({ mensagem: 'Vendedor inserido com sucesso' });
                         }
                    })
        } catch (error) {
            console.error("Erro ao conectar no banco: ", error);
        }
    },

    async atualizarVendedor(request, reply, app){
        try {
            app.pg.query(`
            UPDATE vendedor SET 
            usuario_vendedor_id = ${Number(request.body.usuario_vendedor_id)},
            nome = '${request.body.nome}',
            cpf = '${request.body.cpf}'
            WHERE vendedor.id_vendedor = ${Number(request.params.id_vendedor)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Vendedor atualizado com sucesso '});
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    },

    async excluirVendedor(request, reply, app){
        try {
            app.pg.query(`DELETE FROM vendedor WHERE vendedor.id_vendedor = ${Number(request.params.id_vendedor)}`,
        function onResult(err, result){
            if (err) {
                reply.send(err)
            } else {
                reply.send({ mensagem: 'Vendedor excluído com sucesso '});
            }
        })
        } catch (error) {
            console.error("Erro ao conectar no banco de dados: ", error);
        }
    }
}

module.exports = VendedorModel;