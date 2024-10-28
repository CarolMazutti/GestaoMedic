const EstoqueModel = {

    async listarEstoque(request, reply, app) {
        try {
            const resposta = await app.pg.query('SELECT * from Estoque');

            if (resposta.rows.length > 0) {
                return { success: true, content: resposta.rows }
            }
            else {
                return { success: false, message: 'Nenhum estoque foi encontrado' }
            }
            
        } catch (error) {
            return { message: 'Erro ao conectar no banco', error: error }
        }
    },

    async listarEstoquePorId(request, reply, app) {
        try {
            const query = `SELECT * FROM estoque WHERE estoque.id_estoque = $1`;
            const values = [Number(request.params.id_estoque)];
            const resposta = await app.pg.query(query, values);

            if (resposta.rows.length > 0) {
                return { success: true, content: resposta.rows[0] }
            }
            else{
                return { success: false, message: 'Nenhum estoque foi encontrado' }
            }
            
        } catch (error) {
            return { message: 'Erro ao conectar no banco', error: error }
        }
    },

    async inserirEstoque(request, reply, app) {
        try {
            const { produto_estoque_id, quantidade, data_entrada } = request.body;
            const query = `INSERT INTO estoque (produto_estoque_id, quantidade, data_entrada) VALUES ($1, $2, $3)`;
            const values = [Number(produto_estoque_id), quantidade, data_entrada];

            await app.pg.query(query, values);

            return { success: true };

        } catch (error) {
            return { success: false, message: 'Erro ao conectar no banco', error: error }
        }
    },

    async atualizarEstoque(request, reply, app) {
        try {
            let ajusteQuantidade = request.body.tipo_movimentacao === 'COMPRA' ? Number(request.body.quantidade) : Number(-request.body.quantidade);

            const query = `UPDATE estoque SET quantidade = ${ajusteQuantidade} WHERE produto_estoque_id = ${request.body.id_produto}`

            await app.pg.query(query);

            return { success: true };

        } catch (error) {
            return { success: false, message: 'Erro ao conectar no banco', error: error }
        }
    },

    async excluirEstoque(request, reply, app) {
        try {
            const query = `DELETE FROM estoque WHERE estoque.id_estoque = $1`;
            const values = [Number(request.params.id_estoque)];

            await app.pg.query(query, values);

            return { success: true };

        } catch (error) {
            return { success: false, message: 'Erro ao conectar no banco', error: error }
        }
    }
}

module.exports = EstoqueModel;