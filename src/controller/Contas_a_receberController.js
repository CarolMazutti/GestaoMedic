const Contas_a_receberModel = require("../model/Contas_a_receberModel.js");

const Contas_a_receberController = {

    async listarContas_a_receber(request, reply, app){
        try {
            const result = await Contas_a_receberModel.listarContas_a_receber(request, reply, app);
            return result;
        } catch (error) {
            console.log("Erro ao listar contas a receber", error);
        }
    },

    async listarContas_a_receberPorId(request, reply, app){
        try {
            const result = await Contas_a_receberModel.listarContas_a_receberPorId(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar contas a receber", error);
        }
    },

    async inserirContas_a_receber(request, reply, app){
        try {
            const result = await Contas_a_receberModel.inserirContas_a_receber(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir contas a receber", error);
        }
    },

   async excluirContas_a_receber(request, reply, app){
    try {
        const result = await Contas_a_receberModel.excluirContas_a_receber(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao excluir contas a receber", error);
    }
   },

   async atualizarContas_a_receber(request, reply, app){
    try {
        const result = await Contas_a_receberModel.atualizarContas_a_receber(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao atualizar contas a receber", error);
    }
   },
}

module.exports = Contas_a_receberController;