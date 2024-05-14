const Contas_a_pagarModel = require("../model/Contas_a_pagarModel.js");

const Contas_a_pagarController = {

    async listarContas_a_pagar(request, reply, app){
        try {
            const result = await Contas_a_pagarModel.listarContas_a_pagar(request, reply, app);
            return result;
        } catch (error) {
            console.log("Erro ao listar Contas a pagar", error);
        }
    },

    async listarContas_a_pagarPorId(request, reply, app){
        try {
            const result = await Contas_a_pagarModel.listarContas_a_pagarPorId(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar contas a pagar", error);
        }
    },


    async inserirContas_a_pagar(request, reply, app){
        try {
            const result = await Contas_a_pagarModel.inserirContas_a_pagar(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir contas a pagar", error)
        }
    },

   async excluirContas_a_pagar(request, reply, app){
    try {
        const result = await Contas_a_pagarModel.excluirContas_a_pagar(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao excluir contas a pagar", error);
    }
   },

   async atualizarContas_a_pagar(request, reply, app){
    try {
        const result = await Contas_a_pagarModel.atualizarContas_a_pagar(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao atualizar contas a pagar", error);
    }
   },
}

module.exports = Contas_a_pagarController;