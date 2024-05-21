const EstoqueModel = require("../model/EstoqueModel.js");

const EstoqueController = {

    
    async listarEstoque(request, reply, app){
        try {
            const resultado = await EstoqueModel.listarEstoque(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar estoque: ", error);
        }
    },

    async listarEstoquePorId(request, reply, app){
        try {
            const resultado = await EstoqueModel.listarEstoquePorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar estoque: ",error);
        }
    },

    async inserirEstoque(request, reply, app){
        try {
            await EstoqueModel.inserirEstoque(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir produto no estoque: ", error);
        }
    },

    async atualizarEstoque(request, reply, app){
        try {
            await EstoqueModel.atualizarEstoque(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar estoque: ", error);
        }
    },

    // async excluirProduto(request, reply, app){
    //     try {
    //         await ProdutoModel.excluirProduto(request, reply, app);
    //     } catch (error) {
    //         console.error("Erro ao excluir Produto: ", error);
    //         throw error;
    //     }
    // }

    async excluirEstoque(request, reply, app){
        try {
            await EstoqueModel.excluirEstoque(request, reply, app);
        } catch (error) {
            console.error("Erro ao escluir estoque: ", error);
        }
    }
}

module.exports = EstoqueController;