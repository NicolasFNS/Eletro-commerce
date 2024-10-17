const produtoSelecionado = JSON.parse(localStorage.getItem('produtoSelecionado'));

function exibirDetalhesProduto() {
    const produtoDetalhes = document.getElementById('produto-detalhes');

    if (!produtoSelecionado) {
        alert('Nenhum produto encontrado!');
        window.location.href = 'index.html';
        return;
    }

    const detalhesHTML = `
        <img src="${ produtoSelecionado.imagem }" alt="${ produtoSelecionado.nome }">
        <h1>${ produtoSelecionado.nome }</h1>
        <p>Preço: R$ ${ produtoSelecionado.preco.toFixed(2) }</p>
        <p>${ produtoSelecionado.descricao }</p>
        <a href="index.html" class="button">Voltar</a>
    `;

    produtoDetalhes.innerHTML = detalhesHTML;
}

document.addEventListener('DOMContentLoaded', exibirDetalhesProduto);

