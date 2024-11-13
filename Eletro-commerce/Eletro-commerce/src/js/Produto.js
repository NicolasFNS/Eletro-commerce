async function exibirProdutos() {
    const produtoCards = document.getElementById('produtos');
    
    try {
        const response = await fetch('./php/produtos.php');
        const produtos = await response.json();

        produtos.forEach(produto => {
            const card = document.createElement('section');
            card.className = 'card-produto';
            card.innerHTML = `
                <img src="${ produto.imagem }" alt="${ produto.nome }">
                <h1>${ produto.nome }</h1>
                <p>Preço: R$ ${ produto.preco }</p>
                <p>${ produto.descricao }</p>
                <a href="#" class="button">Comprar</a>
            `;

            const button = card.querySelector('.button');
            button.addEventListener('click', (event) => {
                event.preventDefault();
                
                localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
                
                window.location.href = 'produto.html';
            });

            produtoCards.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

document.addEventListener('DOMContentLoaded', exibirProdutos);
