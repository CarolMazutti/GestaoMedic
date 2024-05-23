const VendaModel = require("../model/VendaModel.js");

const VendaController = {

    async listarVenda(request, reply, app){
        try {
            const result = await VendaModel.listarVenda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao lista vendas: ", error);
        }
    },

    async listarVendaPorId(request, reply, app){
        try {
            const result = await VendaModel.listarVendaPorId(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar vendas: ", error);
        }
    },

    async inserirVenda(request, reply, app){
        try {
            const result = await VendaModel.inserirVenda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir venda: ", error);
        }
    },

    // async excluirUsuario(request, reply, app){
    //     try {
    //         const result = await UsuarioModel.excluirUsuario(request, reply, app);
    //         return result;
    //     } catch (error) {
    //         console.error("Erro ao excluir usuário", error);
    //     }
    // },

    async excluirVenda(request, reply, app){
        try {
            const result = await VendaModel.excluirVenda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao excluir venda: ", error);
        }
    },

    async atualizarVenda(request, reply, app){
        try {
            const result = await VendaModel.atualizarVenda(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar venda: ", error);
        }
    }
}

module.exports = VendaController;