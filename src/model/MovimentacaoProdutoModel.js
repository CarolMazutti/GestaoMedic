const MovimentacaoProdutoModel = {
    async inserirMovimentacaoProduto(request, reply, app) {
        try {
            const { id_produto, tipo_movimentacao, quantidade } = request.body;
            const query = `INSERT INTO movimentacao_produto (id_produto, tipo_movimentacao, quantidade) VALUES ($1, $2, $3)`;
            const values = [id_produto, tipo_movimentacao, Number(quantidade)];

            await app.pg.query(query, values);

            return { success: true };

        } catch (error) {
            return { success: false, message: 'Erro ao conectar no banco', error: error }
        }
    },
}

module.exports = MovimentacaoProdutoModel;