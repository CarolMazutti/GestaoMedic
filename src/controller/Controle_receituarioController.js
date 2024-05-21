const Controle_receituarioModel = require("../model/Controle_receituarioModel.js");

const Controle_receituarioController = {

    async listarControle_receituario(request, reply, app){
        try {
            const resultado = await Controle_receituarioModel.listarControle_receituario(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar controle de lote: ", error);
        }
    },

    async listarControle_receituarioPorId(request, reply, app){
        try {
            const resultado = await Controle_receituarioModel.listarControle_receituarioPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar receituário: ", error);
        }
    },

    async inserirControle_receituario(request, reply, app){
        try {
            await Controle_receituarioModel.inserirControle_receituario(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir receituário: ", error);
        }
    },

    // async atualizarProduto(request, reply, app){
    //     try {
    //         await ProdutoModel.atualizarProduto(request, reply, app);
    //     } catch (error) {
    //         console.error("Erro ao atualizar Produto: ", error);
    //         throw error;
    //     }
    // },

    async excluirProduto(request, reply, app){
        try {
            await ProdutoModel.excluirProduto(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir Produto: ", error);
            throw error;
        }
    }
}

module.exports = Controle_receituarioController;