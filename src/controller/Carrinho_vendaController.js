const Carrinho_vendaModel = require("../model/Carrinho_vendaModel.js");

const Carrinho_vendaController = {

    async listarCarrinho_venda(request, reply, app){
        try {
            const result = await Carrinho_vendaModel.listarCarrinho_venda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar carrinho de vendas: ", error);
        }
    },

    async listarCarrinho_vendaPorId(request, reply, app){
        try {
            const result = await Carrinho_vendaModel.listarCarrinho_vendaPorId(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar carrinho de vendas: ", error);
        }
    },

    async inserirCarrinho_venda(request, reply, app){
        try {
            const result = await Carrinho_vendaModel.inserirCarrinho_venda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir item no carrinho: ", error);
        }
    },
    
    async excluirCarrinho_venda(request, reply, app){
        try {
            const result = await Carrinho_vendaModel.excluirCarrinho_venda(request, reply, app);
            return result;
        } catch (error) {
        console.error("Erro ao excluir item do carrinho: ", error);
        }
    },

    async atualizarCarrinho_venda(request, reply, app){
        try {
            const result = await Carrinho_vendaModel.atualizarCarrinho_venda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar carrinho de vendas: ", error);
        }
    }
}

module.exports = Carrinho_vendaController;