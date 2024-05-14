const ProdutoModel = require("../model/ProdutoModel.js");

const ProdutoController = {

    async listarProduto(request, reply, app){
        try {
            const resultado = await ProdutoModel.listarProduto(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao lista Produto: ", error);
            throw error;
        }
    },

    async listarProdutoPorId(request, reply, app) {
        try {
            const resultado = await ProdutoModel.listarProdutoPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar Produto: ", error);
            throw error;
        }
    },

    async inserirProduto(request, reply, app){
        try {
            await ProdutoModel.inserirProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir Produto: ", error);
            throw error;
        }
    },

    async atualizarProduto(request, reply, app){
        try {
            await ProdutoModel.atualizarProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar Produto: ", error);
            throw error;
        }
    },

    async excluirProduto(request, reply, app){
        try {
            await ProdutoModel.excluirProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir Produto: ", error);
            throw error;
        }
    }
}

module.exports = ProdutoController;