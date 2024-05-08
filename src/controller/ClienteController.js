const ClienteModel = require("../model/ClienteModel.js");

const ClienteController = {

    //Função para listar os clientes
    async listarCliente(request, reply, app){
        try {
            //Guarda o resultado em uma variável para retornar depois
            const resultado = await ClienteModel.listarCliente(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar cliente: ", error);
            throw error;
        }
    },

    //Função para listar o cliente do id informado
    async listarClientePorId(request, reply, app) {
        try {
            //Guarda o resultado em uma variável para retornar depois
            const resultado = await ClienteModel.listarClientePorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar cliente: ", error);
            throw error;
        }
    },
    //Função para inserir o cliente
    async inserirCliente(request, reply, app){
        try {
            //Aguarda a execução do inserirCliente de ClienteModel
            await ClienteModel.inserirCliente(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir cliente: ", error);
            throw error;
        }
    },

    async atualizarCliente(request, reply, app){
        try {
            //Aguarda a execução do atualizarCliente de ClienteModel
            await ClienteModel.atualizarCliente(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar cliente: ", error);
            throw error;
        }
    },

    async excluirCliente(request, reply, app){
        try {
            //Aguarda a execução do excluirCliente de ClienteModel
            await ClienteModel.excluirCliente(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir cliente: ", error);
            throw error;
        }
    }
}

module.exports = ClienteController;