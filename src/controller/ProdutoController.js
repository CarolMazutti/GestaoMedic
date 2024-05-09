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

    //Função para listar o Produto do id informado
    async listarProdutoPorId(request, reply, app) {
        try {
            //Guarda o resultado em uma variável para retornar depois
            const resultado = await ProdutoModel.listarProdutoPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar Produto: ", error);
            throw error;
        }
    },
    //Função para inserir o Produto
    async inserirProduto(request, reply, app){
        try {
            //Aguarda a execução do inserirProduto de ProdutoModel
            await ProdutoModel.inserirProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir Produto: ", error);
            throw error;
        }
    },

    async atualizarProduto(request, reply, app){
        try {
            //Aguarda a execução do atualizarProduto de ProdutoModel
            await ProdutoModel.atualizarProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar Produto: ", error);
            throw error;
        }
    },

    async excluirProduto(request, reply, app){
        try {
            //Aguarda a execução do excluirProduto de ProdutoModel
            await ProdutoModel.excluirProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir Produto: ", error);
            throw error;
        }
    }
}

module.exports = ProdutoController;