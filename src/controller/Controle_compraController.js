const Controle_compraModel = require("../model/Controle_compraModel.js");

const Controle_compraController = {

    // async listarControle_lote(request, reply, app){
    //     try {
    //         const resultado = await Controle_loteModel.listarControle_lote(request, reply, app);
    //         return resultado;
    //     } catch (error) {
    //         console.error("Erro ao listar controle de lote: ", error);
    //     }
    // },

    async listarControle_compra(request, reply, app){
        try {
            const resultado = await Controle_compraModel.listarControle_compra(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar controle de compras: ", error);
        }
    },

    async listarControle_lotePorId(request, reply, app){
        try {
            const resultado = await Controle_loteModel.listarControle_lotePorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar lotes: ", error);
        }
    },

    async inserirControle_lote(request, reply, app){
        try {
            await Controle_loteModel.inserirControle_lote(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir lote: ", error);
        }
    },

    async atualizarControle_lote(request, reply, app){
        try {
            await Controle_loteModel.atualizarControle_lote(request, reply, app);
        } catch (error) {
            console.erro("Erro ao atualizar lote: ", error);
        }
    },

    async excluirControle_lote(request, reply, app){
        try {
            await Controle_loteModel.excluirControle_lote(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir lote: ", error);
        }
    },
}

module.exports = Controle_compraController;