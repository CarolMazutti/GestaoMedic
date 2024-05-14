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

    async inserirUsuario(request, reply, app){
        try {
            const result = await UsuarioModel.inserirUsuario(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir usuario", error);
        }
    },

    async excluirUsuario(request, reply, app){
        try {
            const result = await UsuarioModel.excluirUsuario(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao excluir usuário", error);
        }
    },

    async atualizarUsuario(request, reply, app){
        try {
            const result = await UsuarioModel.atualizarUsuario(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar usuário", error);
        }
    },
}

module.exports = UsuarioController;