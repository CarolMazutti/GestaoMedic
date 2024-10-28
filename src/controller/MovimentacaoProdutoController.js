const MovimentacaoProdutoModel = require("../model/MovimentacaoProdutoModel.js");
const EstoqueController = require("../controller/EstoqueController.js");

const MovimentacaoProdutoController = {
    
    async registrarMovimentacao(request, reply, app){
        try {
            const resultado = await MovimentacaoProdutoModel.inserirMovimentacaoProduto(request, reply, app);

            if (resultado.success) {
                const resultado_estoque = await EstoqueController.atualizarEstoque(request, reply, app);

                if (resultado_estoque.success) {
                    reply.status(200).send({ message: 'Movimentação do produto + estoque registrada com sucesso' });
                }
                else{
                    reply.status(400).send({ message: 'Erro inesperado ao atualizar estoque', error: resultado_estoque.error });
                }
            }
            else{
                reply.status(400).send({ message: 'Erro inesperado ao inserir movimentação', error: resultado.error });
            }

            
        } catch (error) {
            reply.status(500).send({ message: 'Erro interno do servidor', error: error });
        }
    }
}

module.exports = MovimentacaoProdutoController;