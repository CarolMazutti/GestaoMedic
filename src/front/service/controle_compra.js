async function inserirControle_compra() {
    try {
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
        if (produto === "" || quantidade === "" || valorUnitario === "" || valorVenda === "" || valorTotal === ""|| fornecedor === ""|| nfe === ""|| dataCompra === "") {
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
            // Requisição para inserir lote
            const response_lote = await fetch('http://localhost:3333/controle_lote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(controle_lote),
            });

            const controleLote = await response_lote.json();

            //nao kkkkk
            // é pq ele não ta sendo usado mesmo
            // KKKKKK

            if (!controleLote.ok){
                alert('Erro ao controle lote');
            }
        }
        
        console.log("Compra: ", JSON.stringify(controle_compra))

        // Requisição para inserir controle compra
        const response_controle_compra = await fetch('http://localhost:3333/controle_compra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(controle_compra),
        });

        const controleCompra = await response_controle_compra.json();

        if (response_controle_compra.ok) {
            // Limpar o formulário
            limparFormulario();
            alert('Compra cadastrada com sucesso');
            // Aqui você pode adicionar código para atualizar a interface ou redirecionar o usuário
            // KKKKKKKKKK

        } else {
            if (response.status === 400) {
                alert('Erro ao cadastrar compra: ' + controleLote.message + controleCompra.message);
            } else if (response.status === 500) {
                alert('Erro interno do servidor: ' + controleLote.message + controleCompra.message);
            } else {
                alert('Erro desconhecido ao cadastrar compra');
            }
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
    document.getElementById('nfe').value = '';
    document.getElementById('dataCompra').value = '';
    document.getElementById('valorTotal').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('nfe').value = '';
    document.getElementById('dataCompra').value = '';
}