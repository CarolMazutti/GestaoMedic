const FornecedorModel = require("../model/FornecedorModel.js");

const FornecedorController = {

    async listarFornecedor(request, reply, app){
        try {
            const resultado = await FornecedorModel.listarFornecedor(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao lista fornecedor: ", error);
            throw error;
        }
    },

    async listarFornecedorPorId(request, reply, app) {
        try {
            const resultado = await FornecedorModel.listarFornecedorPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar fornecedor: ", error);
            throw error;
        }
    },

    async inserirFornecedor(request, reply, app){
        try {
            await FornecedorModel.inserirFornecedor(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir fornecedor: ", error);
            throw error;
        }
    },

    async atualizarFornecedor(request, reply, app){
        try {
            await FornecedorModel.atualizarFornecedor(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar Fornecedor: ", error);
            throw error;
        }
    },

    async excluirFornecedor(request, reply, app){
        try {
            await FornecedorModel.excluirFornecedor(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir fornecedor: ", error);
            throw error;
        }
    }
}

module.exports = FornecedorController;