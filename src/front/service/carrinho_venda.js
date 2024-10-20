async function inserirVenda() {
    try {
        // Coletar dados do formulário
        const usuario = document.getElementById('usuario').value;
        const produto = document.getElementById('produto').value;
        const quantidade = document.getElementById('quantidade').value;
        const valorUnitario = document.getElementById('valorUnitario').value;
        const valorTotal = document.getElementById('valorTotal').value;
        const dataVenda = document.getElementById('dataVenda').value;
        const condicaoPagamento = document.getElementById('condicaoPagamento').value;

        // Validar dados
        if (usuario === "" || produto === "" || quantidade === "" || valorUnitario === "" || valorTotal === "" || dataVenda === "" || condicaoPagamento === "" ) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Preparar dados para envio
        const carrinho_venda = {
            usuario_carrinho_id: usuario,
            produto_carrinho_id: produto,
            quantidade: quantidade,
            data_venda: dataVenda,
            valor_unitario: valorUnitario,
            condicao_de_pagamento: condicaoPagamento,
            valor_total: valorTotal

        };

        // Primeira requisição (Inserir Venda)
        const response = await fetch('http://localhost:3333/carrinho_venda', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carrinho_venda),
        });

        const data = await response.json();

        if (response.ok) {
            // Segunda requisição (Registrar Movimentação)
            await fetch('http://localhost:3333/carrinho_venda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_produto: produto,
                    tipo_movimentacao: "VENDA",
                    quantidade: quantidade
                }),
            });

            // Limpar o formulário após a venda bem-sucedida
            limparFormulario();
            alert('Venda realizada com sucesso!');
            // Redirecionar ou atualizar a página conforme necessário
        } else {
            if (response.status === 400) {
                alert('Erro ao realizar a venda: ' + data.message);
            } else if (response.status === 500) {
                alert('Erro interno do servidor: ' + data.message);
            }
        }
    } catch (error) {
        console.error('Erro ao processar a venda:', error);
        alert('Ocorreu um erro ao processar a venda. Por favor, tente novamente.');
    }
}
function limparFormulario() {
    document.getElementById('usuario').value = '';
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('desconto').value = '';
    document.getElementById('valor_unitario').value = '';
    document.getElementById('valor_total').value = '';
    document.getElementById('data_venda').value = new Date().toISOString().split('T')[0];
    document.getElementById('condicao_pagamento').value = '';
}
