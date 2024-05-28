async function atualizaProduto(id_produto) {
    try {
        const response = await fetch(`http://localhost:3333/produto/atualizar/${id_produto}`, {
            method: 'PUT'
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar produto: ', error);
        }

        alert('Produto atualizado com sucesso');
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar produto: ', error);
    }
}