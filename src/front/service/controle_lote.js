async function inserirControleLote(controle_lote) {
    try {
        // Requisição para inserir controle lote
        const response = await fetch('http://localhost:3333/controle_lote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(controle_lote),
        });

        const data = await response.json();

        if (response.ok) {
            return true;
        } 
        else {
            alert('Erro ao cadastrar lote: ' + data.message);
            return false;
        }
    } catch (error) {
        console.error('Erro ao processar o cadastro do lote:', error);
        alert('Ocorreu um erro ao processar o cadastro do lote. Por favor, tente novamente.');
    }
}