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

    async autenticarUsuario(request, reply, app) {
        try {
          const { login, senha } = request.body;
          const usuario = await UsuarioModel.autenticarUsuario(login, senha);
          if (usuario) {
            return reply.code(200).send({ mensagem: "Usuário autenticado com sucesso" });
          } else {
            return reply.code(401).send({ mensagem: "Login ou senha inválidos" });
          }
        } catch (error) {
          console.error("Erro ao autenticar usuário", error);
          return reply.code(500).send({ mensagem: "Erro ao autenticar usuário" });
        }
      },
}

module.exports = UsuarioController;