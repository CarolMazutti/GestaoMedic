const Controle_receituarioModel = require("../model/Controle_receituarioModel.js");

const Controle_receituarioController = {

    async listarControle_receituario(request, reply, app){
        try {
            const resultado = await Controle_receituarioModel.listarControle_receituario(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar receituário: ", error);
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

    async atualizarControle_receituario(request, reply, app){
        try {
            await Controle_receituarioModel.atualizarControle_receituario(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar receituario: ", error);
        }
    },

    async excluirControle_receituario(request, reply, app){
        try {
            await Controle_receituarioModel.excluirControle_receituario(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir receituario: ", error);
        }
    }
}

module.exports = Controle_receituarioController;