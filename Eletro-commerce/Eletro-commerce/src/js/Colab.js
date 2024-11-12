//colaboradores
const colabs = [
    {
        nome: "Sample Games",
        descricao: "Desenvolvimento de jogos.",
        imagem: "./images/sample.png"
    },
    {
        nome: "Tião Cervejas",
        descricao: "Malte de qualidade.",
        imagem: "./images/tiao.png"
    },
    {
        nome: "Moldsoft Tecnologia",
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