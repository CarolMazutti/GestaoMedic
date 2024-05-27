async function inserirVendedor() {
    const usuario = document.getElementById("usuario_vendedor").value;
    const nome = document.getElementById("nome_vendedor").value;
    const cpf = document.getElementById("cpf_vendedor").value;

    if (usuario === "" || nome === "" || cpf === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const vendedor = {
        usuario_vendedor_id: usuario,
        nome: nome,
        cpf: cpf
    };

    try {
        const response = await fetch('http://localhost:3333/vendedor', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(vendedor)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir vendedor');
        }

        alert('Vendedor inserido com sucesso');
        document.getElementById("vendedorForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir vendedor');
    }
}
