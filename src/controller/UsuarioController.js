const UsuarioModel = require("../model/UsuarioModel.js");

const UsuarioController = {

    async listarUsuario(request, reply, app) {
        try {
            const usuarios = await UsuarioModel.listarUsuario(app);
            if (usuarios.length > 0) {
                reply.status(200).send(usuarios);
            } else {
                reply.status(204).send({ mensagem: 'Nenhum usuário foi encontrado' });
            }
        } catch (error) {
            reply.status(500).send({ mensagem: 'Erro ao listar usuários', error });
        }
    },

    async listarUsuarioPorId(request, reply, app) {
        try {
            const usuario = await UsuarioModel.listarUsuarioPorId(request, app);
            if (usuario.length > 0) {
                reply.status(200).send(usuario[0]);
            } else {
                reply.status(204).send({ mensagem: 'Nenhum usuário foi encontrado' });
            }
        } catch (error) {
            reply.status(500).send({ mensagem: 'Erro ao listar usuário', error });
        }
    },

    async inserirUsuario(request, reply, app) {
        try {
            const usuario = await UsuarioModel.inserirUsuario(request, app);
            reply.status(201).send({ mensagem: 'Usuário inserido com sucesso', usuario });
        } catch (error) {
            reply.status(500).send({ mensagem: 'Erro ao inserir usuário', error });
        }
    },

    async atualizarUsuario(request, reply, app) {
        try {
            const usuario = await UsuarioModel.atualizarUsuario(request, app);
            reply.status(200).send({ mensagem: 'Usuário atualizado com sucesso', usuario });
        } catch (error) {
            reply.status(500).send({ mensagem: 'Erro ao atualizar usuário', error });
        }
    },

    async excluirUsuario(request, reply, app) {
        try {
            const usuario = await UsuarioModel.excluirUsuario(request, app);
            if (usuario) {
                reply.status(200).send({ mensagem: 'Usuário excluído com sucesso' });
            } else {
                reply.status(204).send({ mensagem: 'Usuário não encontrado' });
            }
        } catch (error) {
            reply.status(500).send({ mensagem: 'Erro ao excluir usuário', error });
        }
    },

    async autenticarUsuario(request, reply, app) {
        try {
            const autenticado = await UsuarioModel.autenticarUsuario(request, app);
            if (autenticado) {
                reply.status(200).send({ mensagem: 'Usuário autenticado' });
            } else {
                reply.status(401).send({ mensagem: 'Usuário e/ou senha inválidos' });
            }
        } catch (error) {
            reply.status(500).send({ mensagem: 'Erro ao autenticar usuário', error });
        }
    }
}

module.exports = UsuarioController;
