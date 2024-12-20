const Fastify = require("fastify");
const path = require('node:path');

const ClienteController = require("../src/controller/ClienteController.js");
const FornecedorController = require("../src/controller/FornecedorController.js");
const ProdutoController = require("./controller/ProdutoController.js");
const EstadoController = require("./controller/EstadoController.js");
const CidadeController = require("./controller/CidadeController.js");
const Contas_a_pagarController = require("./controller/Contas_a_pagarController.js");
const Contas_a_receberController = require("./controller/Contas_a_receberController.js");
const UsuarioController = require("./controller/UsuarioController.js");
const EstoqueController = require("./controller/EstoqueController.js");
const Controle_receituarioController = require("./controller/Controle_receituarioController.js");
const Controle_loteController = require("./controller/Controle_loteController.js");
const VendedorController = require("./controller/VendedorController.js");
const Controle_compraController = require("./controller/Controle_compraController.js");
const Carrinho_vendaController = require("./controller/Carrinho_vendaController.js");
const VendaController = require("./controller/VendaController.js");
MovimentacaoProdutoController = require("./controller/MovimentacaoProdutoController.js");

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

// app.register(require('@fastify/static'), {
//     root: path.join(__dirname, 'front'),
//     prefix: '/', // optional: default '/'
// })

app.register(require("@fastify/postgres"), {
    connectionString: "postgres://postgres:postgres@localhost:5432/gestaomedic"
                     //postgres://username:senha@localhost:port/nome_banco
})


// app.get("/inicio", function(request, reply){
//     return reply.sendFile('html/index.html')
// })

// app.get("/view/inserirCidade", sendHtmlFile("cidade", "cidade.html"));
// app.get("/listarCidade", sendHtmlFile("cidade", "lista_cidade.html"));
// app.get("/editarCidade", sendHtmlFile("cidade", "edita_cidade.html"));

// app.get("/inserirEstado", sendHtmlFile("estado", "estado.html"));
// app.get("/listarEstado", sendHtmlFile("estado", "lista_estado.html"));
// app.get("/editarEstado", sendHtmlFile("estado", "edita_estado.html"));

// function sendHtmlFile(pasta, caminho) {
//     return function (request, reply) {
//         reply.sendFile(`html/${pasta}/${caminho}`);
//     };
// }



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




app.get("/fornecedor", function(request, reply){
    FornecedorController.listarFornecedor(request, reply, app);
});
app.get("/fornecedor/:id_fornecedor", function (request, reply) {
    FornecedorController.listarFornecedorPorId(request, reply, app);
});
app.post('/fornecedor', function(request, reply) {
    FornecedorController.inserirFornecedor(request, reply, app);
});
app.put('/fornecedor/atualizar/:id_fornecedor', function(request, reply){
    FornecedorController.atualizarFornecedor(request, reply, app);
})
app.delete('/fornecedor/excluir/:id_fornecedor', function(request, reply){
    FornecedorController.excluirFornecedor(request, reply, app);
})




app.get("/produto", function(request, reply){
    ProdutoController.listarProduto(request, reply, app);
});
app.get("/produto/:id_produto", function (request, reply) {
    ProdutoController.listarProdutoPorId(request, reply, app);
});
app.post('/produto', function(request, reply) {
    ProdutoController.inserirProduto(request, reply, app);
});
app.put('/produto/atualizar/:id_produto', function(request, reply){
    ProdutoController.atualizarProduto(request, reply, app);
})
app.delete('/produto/excluir/:id_produto', function(request, reply){
    ProdutoController.excluirProduto(request, reply, app);
})




app.get("/estado", function(request, reply){
    EstadoController.listarEstado(request, reply, app);
});
app.get("/estado/:id_estado", function (request, reply) {
    EstadoController.listarEstadoPorId(request, reply, app);
});
app.post('/estado', function(request, reply) {
    EstadoController.inserirEstado(request, reply, app);
});
app.put('/estado/atualizar/:id_estado', function(request, reply){
    EstadoController.atualizarEstado(request, reply, app);
});
app.delete('/estado/excluir/:id_estado', function(request, reply){
    EstadoController.excluirEstado(request, reply, app);
});




app.get("/cidade", function(request, reply){
    CidadeController.listarCidade(request, reply, app);
});
app.get("/cidade/:id_cidade", function(request, reply){
    CidadeController.listarCidadePorId(request, reply, app);
});
app.post('/cidade', function(request, reply){
    CidadeController.inserirCidade(request, reply, app);
});
app.put('/cidade/atualizar/:id_cidade', function(request, reply){
    CidadeController.atualizarCidade(request, reply, app);
});
app.delete('/cidade/excluir/:id_cidade', function(request, reply){
    CidadeController.excluirCidade(request, reply, app);
});




app.get("/contas_a_pagar", function(request, reply){
    Contas_a_pagarController.listarContas_a_pagar(request, reply, app);
});
app.get("/contas_a_pagar/:id_contas_pagar", function(request, reply){
    Contas_a_pagarController.listarContas_a_pagarPorId(request, reply, app);
});
app.post('/contas_a_pagar', function(request, reply){
    Contas_a_pagarController.inserirContas_a_pagar(request, reply, app);
});
app.put('/contas_a_pagar/atualizar/:id_contas_pagar', function(request, reply){
    Contas_a_pagarController.atualizarContas_a_pagar(request, reply, app);
});
app.delete('/contas_a_pagar/excluir/:id_contas_pagar', function(request, reply){
    Contas_a_pagarController.excluirContas_a_pagar(request, reply, app);
});





app.get("/contas_a_receber", function(request, reply){
    Contas_a_receberController.listarContas_a_receber(request, reply, app);
});
app.get("/contas_a_receber/:id_contas_receber", function(request, reply){
    Contas_a_receberController.listarContas_a_receberPorId(request, reply, app);
});
app.post('/contas_a_receber', function(request, reply){
    Contas_a_receberController.inserirContas_a_receber(request, reply, app);
});
app.put('/contas_a_receber/atualizar/:id_contas_receber', function(request, reply){
    Contas_a_receberController.atualizarContas_a_receber(request, reply, app);
});
app.delete('/contas_a_receber/excluir/:id_contas_receber', function(request, reply){
    Contas_a_receberController.excluirContas_a_receber(request, reply, app);
});




app.get("/usuario", function(request, reply){
    UsuarioController.listarUsuario(request, reply, app);
});
app.get("/usuario/:id_usuario", function(request, reply){
    UsuarioController.listarUsuarioPorId(request, reply, app);
});
app.post('/usuario', function(request, reply){
    UsuarioController.inserirUsuario(request, reply, app);
});
app.put('/usuario/atualizar/:id_usuario', function(request, reply){
    UsuarioController.atualizarUsuario(request, reply, app);
});
app.delete('/usuario/excluir/:id_usuario', function(request, reply){
    UsuarioController.excluirUsuario(request, reply, app);
});




app.get("/estoque", function(request, reply){
    EstoqueController.listarEstoque(request, reply, app);
});
app.get("/estoque/:id_estoque", function(request, reply){
    EstoqueController.listarEstoquePorId(request, reply, app);
});
app.post('/estoque', function(request, reply){
    EstoqueController.inserirEstoque(request, reply, app);
});
app.put('/estoque/atualizar/:id_estoque', function(request, reply){
    EstoqueController.atualizarEstoque(request, reply, app);
});
app.delete('/estoque/excluir/:id_estoque', function(request, reply){
    EstoqueController.excluirEstoque(request, reply, app);
});




app.get("/controle_receituario", function(request, reply){
    Controle_receituarioController.listarControle_receituario(request, reply, app);
});
app.get("/controle_receituario/:id_receituario", function(request, reply){
    Controle_receituarioController.listarControle_receituarioPorId(request, reply, app);
});
app.post('/controle_receituario', function(request, reply){
    Controle_receituarioController.inserirControle_receituario(request, reply, app);
});
app.put('/controle_receituario/atualizar/:id_receituario', function(request, reply){
    Controle_receituarioController.atualizarControle_receituario(request, reply, app);
});
app.delete('/controle_receituario/excluir/:id_receituario', function(request, reply){
    Controle_receituarioController.excluirControle_receituario(request, reply, app);
});




app.get("/controle_lote", function(request, reply){
    Controle_loteController.listarControle_lote(request, reply, app);
});
app.get("/controle_lote/:id_lote", function(request, reply){
    Controle_loteController.listarControle_lotePorId(request, reply, app);
});
app.post('/controle_lote', function(request, reply){
    Controle_loteController.inserirControle_lote(request, reply, app);
});
app.put('/controle_lote/atualizar/:id_lote', function(request, reply){
    Controle_loteController.atualizarControle_lote(request, reply, app);
});
app.delete('/controle_lote/excluir/:id_lote', function(request, reply){
    Controle_loteController.excluirControle_lote(request, reply, app);
});




app.get("/vendedor", function(request, reply){
    VendedorController.listarVendedor(request, reply, app);
});
app.get("/vendedor/:id_vendedor", function(request, reply){
    VendedorController.listarVendedorPorId(request, reply, app);
});
app.post('/vendedor', function(request, reply){
    VendedorController.inserirVendedor(request, reply, app);
});
app.put('/vendedor/atualizar/:id_vendedor', function(request, reply){
    VendedorController.atualizarVendedor(request, reply, app);
});
app.delete('/vendedor/excluir/:id_vendedor', function(request, reply){
    VendedorController.excluirVendedor(request, reply, app);
});




app.get("/controle_compra", function(request, reply){
    Controle_compraController.listarControle_compra(request, reply, app);
});
app.get("/controle_compra/:id_controle_compra", function(request, reply){
    Controle_compraController.listarControle_compraPorId(request, reply, app);
});
app.post('/controle_compra', function(request, reply){
    Controle_compraController.inserirControle_compra(request, reply, app);
});
app.put('/controle_compra/atualizar/:id_controle_compra', function(request, reply){
    Controle_compraController.atualizarControle_compra(request, reply, app);
});
app.delete('/controle_compra/excluir/:id_controle_compra', function(request, reply){
    Controle_compraController.excluirControle_compra(request, reply, app);
});




app.get("/carrinho_venda", function(request, reply){
    Carrinho_vendaController.listarCarrinho_venda(request, reply, app);
});
app.get("/carrinho_venda/:id_carrinho_venda", function(request, reply){
    Carrinho_vendaController.listarCarrinho_vendaPorId(request, reply, app);
});
app.post('/carrinho_venda', function(request, reply){
    Carrinho_vendaController.inserirCarrinho_venda(request, reply, app);
});
app.put('/carrinho_venda/atualizar/:id_carrinho_venda', function(request, reply){
    Carrinho_vendaController.atualizarCarrinho_venda(request, reply, app);
});
app.delete('/carrinho_venda/excluir/:id_carrinho_venda', function(request, reply){
    Carrinho_vendaController.excluirCarrinho_venda(request, reply, app);
});




app.get("/venda", function(request, reply){
    VendaController.listarVenda(request, reply, app);
});
app.get("/venda/:id_venda", function(request, reply){
    VendaController.listarVendaPorId(request, reply, app);
});
app.post('/venda', function(request, reply){
    VendaController.inserirVenda(request, reply, app);
});
app.put('/venda/atualizar/:id_venda', function(request, reply){
    VendaController.atualizarVenda(request, reply, app);
});
app.delete('/venda/excluir/:id_venda', function(request, reply){
    VendaController.excluirVenda(request, reply, app);
});




app.post('/api/login', function(request, reply) {
    UsuarioController.autenticarUsuario(request, reply, app);
});

app.post('/registrar_movimentacao', function(request, reply){
    MovimentacaoProdutoController.registrarMovimentacao(request, reply, app);
});


module.exports = {app};



const cors = require('@fastify/cors');

app.register(cors, {
    origin: '*', // Isso permite requisições de qualquer origem.
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});
