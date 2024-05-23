const Controle_compraModel = require("../model/Controle_compraModel.js");

const Controle_compraController = {

    async listarControle_compra(request, reply, app){
        try {
            const resultado = await Controle_compraModel.listarControle_compra(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar compras: ", error);
        }
    },

    async listarControle_compraPorId(request, reply, app){
        try {
            const resultado = await Controle_compraModel.listarControle_compraPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar compras: ", error);
        }
    },

    async inserirControle_compra(request, reply, app){
        try {
            await Controle_compraModel.inserirControle_compra(request, reply, app);
        } catch (error) {
            console.erro("Erro ao inserir compras: ", error);
        }
    },

    async atualizarControle_compra(request, reply, app){
        try {
            await Controle_compraModel.atualizarControle_compra(request, reply, app);
        } catch (error) {
            console.erro("Erro ao atualizar compra: ", error);
        }
    },

    async excluirControle_compra(request, reply, app){
        try {
            await Controle_compraModel.excluirControle_compra(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir compra: ", error);
        }
    }
}

module.exports = Controle_compraController;