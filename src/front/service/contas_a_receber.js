async function inserirContas_a_receber() {
    try {
        // Coletar dados do formulário
        const cliente = document.getElementById('cliente').value;
        const valor = document.getElementById('valor').value;
        const dataVencimento = document.getElementById('dataVencimento').value;
        const dataRecebimento = document.getElementById('dataRecebimento').value;

        // Validar dados
        if (cliente === "" || valor === ""|| dataVencimento === "") {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Preparar dados para envio
        const contas_a_receber = {
            cliente_contas_a_receber_id: cliente,
            valor: valor,
            data_vencimento: dataVencimento,
            data_recebimento: dataRecebimento,
        };

        // Requisição para inserir conta a receber
        const response = await fetch('http://localhost:3333/contas_a_receber', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contas_a_receber),
        });

        const data = await response.json();

        if (response.ok) 
        {
            alert('Conta a receber inserida com sucesso');
            // Limpar o formulário
            limparFormulario();
            // Aqui você pode adicionar código para atualizar a interface ou redirecionar o usuário
        }
        else {
            if (response.status === 400) {
                alert('Erro ao inserir conta a receber: ' + data.message);
            } else if (response.status === 500) {
                alert('Erro interno do servidor: ' + data.message);
            } else {
                alert('Erro desconhecido ao inserir conta a receber');
            }
        }
    } catch (error) {
        console.log(response)
        console.error('Erro ao processar a inserção da conta a receber:', error);
        alert('Ocorreu um erro ao processar a conta a receber. Por favor, tente novamente.');
    }
}

function limparFormulario() {
    document.getElementById('cliente').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('dataVencimento').value = '';
    document.getElementById('dataRecebimento').value = '';
}