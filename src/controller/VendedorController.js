const VendedorModel = require("../model/VendedorModel.js");

const VendedorController = {

    async listarVendedor(request, reply, app){
        try {
            const result = await VendedorModel.listarVendedor(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar vendedor: ", error);
        }
    },

    async listarVendedorPorId(request, reply, app){
        try {
            const result = await VendedorModel.listarVendedorPorId(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao listar vendedor", error);
        }
    },

    async inserirVendedor(request, reply, app){
        try {
            const result = await VendedorModel.inserirVendedor(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao inserir vendedor", error);
        }
    },

    // async excluirUsuario(request, reply, app){
    //     try {
    //         const result = await UsuarioModel.excluirUsuario(request, reply, app);
    //         return result;
    //     } catch (error) {
    //         console.error("Erro ao excluir usuário", error);
    //     }
    // },

    async excluirVendedor(request, reply, app){
        try {
            const result = await VendedorModel.excluirVendedor(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao excluir vendedor: ", error);
        }
    },

    async atualizarVendedor(request, reply, app){
        try {
            const result = await VendedorModel.atualizarVendedor(request, reply, app);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar vendedor: ", error);
        }
    },
}

module.exports = VendedorController;