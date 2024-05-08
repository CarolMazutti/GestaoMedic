const Fastify = require("fastify");
const ClienteController = require("../src/controller/ClienteController.js");
const FornecedorController = require("../src/controller/FornecedorController.js");

const app = Fastify({
    looger: true
})

app.listen({port: 3333}, function(error, address){
    if(error){
        console.log(error)
        process.exit(1)
    }

    console.log("Servidor rodando", address)
})

app.register(require("@fastify/postgres"), {
    connectionString: "postgres://postgres:postgres@localhost:5432/gestaomedic"
                     //postgres://username:senha@localhost:port/nome_banco
})

//Cria a rota para listar os clientes
app.get("/cliente", function(request, reply){
    ClienteController.listarCliente(request, reply, app);
});
//Cria a rota para listar o cliente do id informado
app.get("/cliente/:id_cliente", function (request, reply) {
    ClienteController.listarClientePorId(request, reply, app);
});
//Cria a rota para inserir o cliente 
app.post('/cliente', function(request, reply) {
    ClienteController.inserirCliente(request, reply, app);
});
//Cria a rota para atualizar o cliente do id informado
app.put('/cliente/atualizar/:id_cliente', function(request, reply){
    ClienteController.atualizarCliente(request, reply, app);
})
//Cria a rota para excluir o cliente do id informado
app.delete('/cliente/excluir/:id_cliente', function(request, reply){
    ClienteController.excluirCliente(request, reply, app);
})




//Cria a rota para listar os fornecedores
app.get("/fornecedor", function(request, reply){
    FornecedorController.listarFornecedor(request, reply, app);
});
//Cria a rota para listar o fornecedor do id informado
app.get("/fornecedor/:idfornecedor", function (request, reply) {
    FornecedorController.listarFornecedorPorId(request, reply, app);
});
//Cria a rota para inserir o fornecedor 
app.post('/fornecedor', function(request, reply) {
    FornecedorController.inserirFornecedor(request, reply, app);
});
//Cria a rota para atualizar o fornecedor do id informado
app.put('/fornecedor/atualizar/:idfornecedor', function(request, reply){
    FornecedorController.atualizarFornecedor(request, reply, app);
})
//Cria a rota para excluir o fornecedor do id informado
app.delete('/fornecedor/excluir/:idfornecedor', function(request, reply){
    FornecedorController.excluirFornecedor(request, reply, app);
})

module.exports = {app};