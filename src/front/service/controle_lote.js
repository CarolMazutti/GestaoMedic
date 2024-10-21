async function inserirContas_a_pagar() {
    try {
        // Coletar dados do formulário
        const produto = document.getElementById('produto').value;
        const lote = document.getElementById('lote').value;
        const quantidade = document.getElementById('quantidade').value;
        const dataValidade = document.getElementById('dataValidade').value;

        // Validar dados
        if (produto === "" || lote === "" || quantidade === "" || dataValidade === "") {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Preparar dados para envio
        const controle_lote = {
            produto_lote_id: produto,
            lote: lote,
            quantidade: quantidade,
            data_validade: dataValidade
        }

        // Requisição para inserir conta a pagar
        const response = await fetch('http://localhost:3333/controle_lote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(controle_lote),
        });

        const data = await response.json();

        if (response.ok) {
            // Limpar o formulário
            limparFormulario();
            alert('Conta a pagar inserida com sucesso');
            // Aqui você pode adicionar código para atualizar a interface ou redirecionar o usuário
        } else {
            if (response.status === 400) {
                alert('Erro ao cadastrar lote: ' + data.message);
            } else if (response.status === 500) {
                alert('Erro interno do servidor: ' + data.message);
            } else {
                alert('Erro desconhecido ao cadastrar lote');
            }
        }
    } catch (error) {
        console.error('Erro ao processar o cadastro do lote:', error);
        alert('Ocorreu um erro ao processar o cadastro do lote. Por favor, tente novamente.');
    }
}

function limparFormulario() {
    document.getElementById('produto').value = '';
    document.getElementById('lote').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('dataValidade').value = '';
}