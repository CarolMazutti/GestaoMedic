async function inserirControle_compra() {
    // Coletar dados do formulário
    const lote = document.getElementById('lote').value;
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const valorUnitario = document.getElementById('valorUnitario').value;
    const valorVenda = document.getElementById('valorVenda').value;
    const valorTotal = document.getElementById('valorTotal').value;
    const fornecedor = document.getElementById('fornecedor').value;
    const nfe = document.getElementById('nfe').value;
    const dataCompra = document.getElementById('dataCompra').value;
    const dataValidade = document.getElementById('dataValidade').value;

    // Validar dados
    if (produto === "" || quantidade === "" || valorUnitario === "" || valorVenda === "" || valorTotal === "" || fornecedor === "" || nfe === "" || dataCompra === "") {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Preparar dados para envio
    const controle_compra = {
        id_produto: produto,
        quantidade: quantidade,
        valor_unitario: valorUnitario,
        valor_total: valorTotal,
        fornecedor: fornecedor,
        data_compra: dataCompra,
        nfe: nfe,
        valor_venda: valorVenda,
    };

    const controle_lote = {
        produto_lote_id: produto,
        lote: lote,
        quantidade: quantidade,
        data_validade: dataValidade,
    };

    if (lote != "") {
        // Chama o controle_lote.js
        const resultado = inserirControleLote(controle_lote);

        if (resultado == false) {
            alert('Erro ao inserir controle lote');
            return;
        }
    }

    try {
        // Requisição para inserir controle compra
        const response = await fetch('http://localhost:3333/controle_compra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(controle_compra),
        });

        if (response.ok) {
            // Limpar o formulário
            limparFormulario();
            alert('Compra cadastrada com sucesso');
            // Aqui você pode adicionar código para atualizar a interface ou redirecionar o usuário
            return;

        } else {
            alert('Erro ao cadastrar compra: ' + response.message);
        }
    } catch (error) {
        console.error('Erro ao processar o cadastro da compra:', error);
        alert('Ocorreu um erro ao processar a compra. Por favor, tente novamente.');
    }
}

function limparFormulario() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('valorUnitario').value = '';
    document.getElementById('valorVenda').value = '';
    document.getElementById('valorTotal').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('lote').value = '';
    document.getElementById('dataCompra').value = '';
    document.getElementById('valorTotal').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('nfe').value = '';
    document.getElementById('dataCompra').value = '';
}