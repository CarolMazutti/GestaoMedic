const MovimentacaoProdutoModel = require("../model/MovimentacaoProdutoModel.js");
const EstoqueController = require("../controller/EstoqueController.js");

const MovimentacaoProdutoController = {
    
    async registrarMovimentacao(request, reply, app){
        try {
            await MovimentacaoProdutoModel.inserirMovimentacaoProduto(request, reply, app);
            await EstoqueController.atualizarEstoque(request, reply, app);
        } catch (error) {
            console.error("Erro ao registrar movimentação: ", error);
        }
    }
}

module.exports = MovimentacaoProdutoController;