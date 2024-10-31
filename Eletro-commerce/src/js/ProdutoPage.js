const produtoSelecionado = JSON.parse(localStorage.getItem('produtoSelecionado'));

function exibirDetalhesProduto() {
    const produtoDetalhes = document.getElementById('produto-detalhes');

    if (!produtoSelecionado) {
        alert('Nenhum produto encontrado!');
        window.location.href = 'index.html';
        return;
    }

    const detalhesHTML = `
        <section class="detalhes-produto">
            <img src="${ produtoSelecionado.imagem }" alt="${ produtoSelecionado.nome }">
            <h1>${ produtoSelecionado.nome }</h1>
            <p>Preço: R$ ${ produtoSelecionado.preco.toFixed(2) }</p>
            <p>${ produtoSelecionado.descricao }</p>
            <a href="index.html" class="button">Voltar</a>
        </section>

        <section class="info-adicional">
            <h2>Informações Adicionais</h2>
    
            <div class="contato">
                <h3>Contato do Vendedor</h3>
                <p><span>Email:</span> ${ produtoSelecionado.email }</p>
                <p><span>Telefone:</span> ${ produtoSelecionado.numero }</p>
            </div>
    
            <div class="entrega">
                <h3>Área de Entrega</h3>
                <p>${ produtoSelecionado.entrega }</p>
            </div>
        </section>
    `;

    produtoDetalhes.innerHTML = detalhesHTML;
}

document.addEventListener('DOMContentLoaded', exibirDetalhesProduto);

