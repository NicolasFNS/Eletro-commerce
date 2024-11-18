async function listarProdutos() {
    const produtoCards = document.getElementById('produtos');
    const pesquisa = document.getElementById('pesquisa');
    
    let produtos = [];
    
    try {
        const response = await fetch('../php/produtos.php');
        produtos = await response.json();

        exibirProdutos(produtos, produtoCards);

        pesquisa.oninput = () => {
            const valor = pesquisa.value.toLowerCase();
            const produtosFiltrados = produtos.filter(produto => 
                produto.nome.toLowerCase().includes(valor) ||
                produto.descricao.toLowerCase().includes(valor) ||
                produto.preco.toLowerCase().includes(valor)
            );
            produtoCards.innerHTML = ''; 
            exibirProdutos(produtosFiltrados, produtoCards);
        };
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

function exibirProdutos(produtos, container) {
    produtos.forEach(produto => {
        const card = document.createElement('section');
        card.className = 'card-produto';
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h1>${produto.nome}</h1>
            <p>Preço: R$ ${produto.preco}</p>
            <p>${produto.descricao}</p>
            <a href="#" class="button">Comprar</a>
        `;

        const button = card.querySelector('.button');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
            window.location.href = './product.html';
        });

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', listarProdutos);
