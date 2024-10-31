//colaboradores
const colabs = [
    {
        nome: "Eletro",
        descricao: "Smartphone com tela de 6.5 polegadas e câmera de 48MP.",
        imagem: "./images/eletrocommerce-logo.png"
    },
    {
        nome: "Eletro",
        descricao: "Notebook com processador Intel i7 e 16GB RAM.",
        imagem: "./images/eletrocommerce-logo.png"
    },
    {
        nome: "moldsoft",
        descricao: "Acessoria e tecnologia.",
        imagem: "./images/logo-moldsoft-site-b.png"
    }
];

function exibircolabs() {
    const colabCards = document.getElementById('colabs');

    colabs.forEach(colab => {

        const card = document.createElement('section');
        card.className = 'card-colab';
        card.innerHTML = `
            <img src="${ colab.imagem }" alt="${ colab.nome }">
            <h1>${ colab.nome }</h1>
            <p>${ colab.descricao }</p>
        `;

        colabCards.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', exibircolabs);