const CidadeModel = require("../model/CidadeModel.js");

const CidadeController = {

   async listarCidade(request, reply, app){
    try {
        const result = await CidadeModel.listarCidade(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao listar Cidade", error);
    }
   },
   
   async listarCidadePorId(request, reply, app){
    try {
        const result = await CidadeModel.listarCidadePorId(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao listar Cidade", error);
    }
   },

   async inserirCidade(request, reply, app){
    try {
        const result = await CidadeModel.inserirCidade(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao inserir cidade", error);
    }
   },

   async excluirCidade(request, reply, app){
    try {
        const result = await CidadeModel.excluirCidade(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao excluir cidade", error);
    }
   },

   async atualizarCidade(request, reply, app){
    try {
        const result = await CidadeModel.atualizarCidade(request, reply, app);
        return result;
    } catch (error) {
        console.error("Erro ao atualizar cidade", error);
    }
   },
}

module.exports = CidadeController;