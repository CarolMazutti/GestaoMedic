const UsuarioModel = require("../model/UsuarioModel.js");

const UsuarioController = {

    async listarUsuario(request, reply, app){
        try {
            const result = await UsuarioModel.listarUsuario(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar usuario: ", error);
        }
    },


    async listarUsuarioPorId(request, reply, app){
        try {
            const result = await UsuarioModel.listarUsuarioPorId(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar usuario", error);
        }
    },

    // async inserirContas_a_receber(request, reply, app){
    //     try {
    //         const result = await Contas_a_receberModel.inserirContas_a_receber(request, reply, app);
    //         return result;
    //     } catch (error) {
    //         console.error("Erro ao inserir contas a receber", error)
    //     }
    // },

    async inserirUsuario(request, reply, app){
        try {
            const result = await UsuarioModel.inserirUsuario(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir usuario", error);
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

module.exports = UsuarioController;