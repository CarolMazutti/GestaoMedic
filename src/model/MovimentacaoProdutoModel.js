const MovimentacaoProdutoModel = {
    async inserirMovimentacaoProduto(request, reply, app) {
        try {
            app.pg.query(`INSERT INTO movimentacao_produto (id_produto, tipo_movimentacao, quantidade)
                       VALUES (${Number(request.body.id_produto)}, 
                       '${request.body.tipo_movimentacao}', 
                       ${Number(request.body.quantidade)})`, function onResult(err, result) {
                if (err) {
                    reply.status(500).send(err);
                } else {
                    reply.status(200).send({ mensagem: 'Movimentação registrada com sucesso' });
                }
            })
        } catch (error) {
            console.error("Erro ao registrar movimentação: ", error);
        }
    },
}

module.exports = MovimentacaoProdutoModel;