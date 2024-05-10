const EstadoModel = require("../model/EstadoModel.js");

const EstadoController = {

    async listarEstado(request, reply, app){
        try {
            const resultado = await EstadoModel.listarEstado(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao lista Estado: ", error);
            throw error;
        }
    },

    //Função para listar o Estado do id informado
    async listarEstadoPorId(request, reply, app) {
        try {
            //Guarda o resultado em uma variável para retornar depois
            const resultado = await EstadoModel.listarEstadoPorId(request, reply, app);
            return resultado;
        } catch (error) {
            console.error("Erro ao listar Estado: ", error);
            throw error;
        }
    },
    //Função para inserir o Estado
    async inserirEstado(request, reply, app){
        try {
            //Aguarda a execução do inserirEstado de EstadoModel
            await EstadoModel.inserirEstado(request, reply, app);
        } catch (error) {
            console.error("Erro ao inserir Estado: ", error);
            throw error;
        }
    },

    async atualizarEstado(request, reply, app){
        try {
            //Aguarda a execução do atualizarEstado de EstadoModel
            await EstadoModel.atualizarEstado(request, reply, app);
        } catch (error) {
            console.error("Erro ao atualizar Estado: ", error);
            throw error;
        }
    },

    async excluirEstado(request, reply, app){
        try {
            //Aguarda a execução do excluirEstado de EstadoModel
            await EstadoModel.excluirEstado(request, reply, app);
        } catch (error) {
            console.error("Erro ao excluir Estado: ", error);
            throw error;
        }
    }
}

module.exports = EstadoController;