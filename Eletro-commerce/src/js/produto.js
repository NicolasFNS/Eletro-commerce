//produtos
const produtos = [
    {
        nome: "Notebook",
        preco: 3999.99,
        descricao: "Notebook com processador Intel i7 e 16GB RAM.",
        imagem: "./images/notebook.png",
        email: "teste1@gmail.com",
        numero: "(11) 99999-9999",
        entrega: "Entregamos para as regiões de São Paulo e ABC Paulista."
    },
    {
        nome: "Notebook",
        preco: 1999.99,
        descricao: "Smartphone com tela de 6.5 polegadas e câmera de 48MP.",
        imagem: "./images/smartphone.png",
        email: "teste2@gmail.com",
        numero: "(22) 99999-9999",
        entrega: "Entregamos para as regiões de São Paulo e Fortaleza."
    },
    {
        nome: "Fone de Ouvido",
        preco: 299.99,
        descricao: "Fone de ouvido sem fio com cancelamento de ruído.",
        imagem: "./images/fone.png",
        email: "teste3@gmail.com",
        numero: "(33) 99999-9999",
        entrega: "Entregamos para as regiões de São Paulo e Campinas."
    }
];

function exibirProdutos() {
    const produtoCards = document.getElementById('produtos');

    produtos.forEach(produto => {
        const card = document.createElement('section');
        card.className = 'card-produto';
        card.innerHTML = `
            <img src="${ produto.imagem }" alt="${ produto.nome }">
            <h1>${ produto.nome }</h1>
            <p>Preço: R$ ${ produto.preco.toFixed(2) }</p>
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
}

document.addEventListener('DOMContentLoaded', exibirProdutos);

