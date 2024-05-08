const FornecedorModel = require("../model/FornecedorModel.js");

const FornecedorController = {

    //Função para listar os Fornecedores
    async listarFornecedor(request, reply, app){
        try {
            //Guarda o resultado em uma variável para retornar depois
            const resultado = await FornecedorModel.listarFornecedor(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar fornecedor: ", error);
            throw error;
        }
    },

    //Função para listar o Fornecedor do id informado
    async listarFornecedorPorId(request, reply, app) {
        try {
            //Guarda o resultado em uma variável para retornar depois
            const resultado = await FornecedorModel.listarFornecedorPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar fornecedor: ", error);
            throw error;
        }
    },
    //Função para inserir o Fornecedor
    async inserirFornecedor(request, reply, app){
        try {
            //Aguarda a execução do inserirFornecedor de FornecedorModel
            await FornecedorModel.inserirFornecedor(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir fornecedor: ", error);
            throw error;
        }
    },

    async atualizarFornecedor(request, reply, app){
        try {
            //Aguarda a execução do atualizarFornecedor de FornecedorModel
            await FornecedorModel.atualizarFornecedor(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar Fornecedor: ", error);
            throw error;
        }
    },

    async excluirFornecedor(request, reply, app){
        try {
            //Aguarda a execução do excluirFornecedor de FornecedorModel
            await FornecedorModel.excluirFornecedor(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir fornecedor: ", error);
            throw error;
        }
    }
}

module.exports = FornecedorController;