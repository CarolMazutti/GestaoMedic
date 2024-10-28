const EstoqueModel = require("../model/EstoqueModel.js");

const EstoqueController = {

    
    async listarEstoque(request, reply, app){
        try {
            const resultado = await EstoqueModel.listarEstoque(request, reply, app);

            if (resultado.success) {
                reply.status(200).send(resultado.content);
            }
            else{
                reply.status(204).send({ message: 'Nenhum estoque foi encontrado' });
            }

        } catch (error) {
            reply.status(500).send({ message: 'Erro interno do servidor', error: error });
        }
    },

    async listarEstoquePorId(request, reply, app){
        try {
            const resultado = await EstoqueModel.listarEstoquePorId(request, reply, app);

            if (resultado.success) {
                reply.status(200).send(resultado.content);
            }
            else{
                reply.status(204).send({ success: false, message: 'Nenhum estoque foi encontrado' });
            }
            
        } catch (error) {
            reply.status(500).send({ success: false, message: 'Erro interno do servidor', error: error });
        }
    },

    async inserirEstoque(request, reply, app){
        try {
            const resultado = await EstoqueModel.inserirEstoque(request, reply, app);

            if (resultado.success) {
                reply.status(200).send({ message: 'Estoque inserido com sucesso' });
            }
            else{
                reply.status(400).send({ message: 'Erro inesperado ao inserir estoque', error: resultado.error });
            }

        } catch (error) {
            reply.status(500).send({ message: 'Erro interno do servidor', error: error });
        }
    },

    async atualizarEstoque(request, reply, app){
        try {
            const resultado = await EstoqueModel.atualizarEstoque(request, reply, app);

            if (resultado.success) {
                reply.status(200).send({ message: 'Estoque atualizado com sucesso' });
            }
            else{
                reply.status(400).send({ message: 'Erro inesperado ao atualizar estoque', error: resultado.error });
            }

        } catch (error) {
            reply.status(500).send({ message: 'Erro interno do servidor', error: error });
        }
    },

    async excluirEstoque(request, reply, app){
        try {
            const resultado = await EstoqueModel.excluirEstoque(request, reply, app);

            if (resultado.success) {
                reply.status(200).send({ message: 'Estoque excluído com sucesso' });
            }
            else{
                reply.status(400).send({ message: 'Erro inesperado ao excluir estoque', error: resultado.error });
            }

        } catch (error) {
            reply.status(500).send({ message: 'Erro interno do servidor', error: error });
        }
    }
}

module.exports = EstoqueController;