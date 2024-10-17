let sliderRadio1 = document.querySelector("#radio1")
let sliderRadio2 = document.querySelector("#radio2")
let sliderRadio3 = document.querySelector("#radio3")

sliderRadio1.checked = true

function sliderTrocaInput(){
    if(sliderRadio1.checked){
        sliderRadio2.checked = true
        sliderRadio1.checked = false
    }
    else if(sliderRadio2.checked){
        sliderRadio3.checked = true
        sliderRadio2.checked = false
    }
    else if(sliderRadio3.checked){
        sliderRadio1.checked = true
        sliderRadio3.checked = false
    }
}

function sliderTrocaImagem(){
    let slider = document.querySelector(".slider")

    if(sliderRadio1.checked){
        slider.style.marginLeft = "0"
    }
    else if(sliderRadio2.checked){
        slider.style.marginLeft = "-100%"
    }
    else if(sliderRadio3.checked){
        slider.style.marginLeft = "-200%"
    }
}
function update(){
    sliderTrocaInput()
    sliderTrocaImagem()
}
let intervalo = setInterval(update, 4000)

let btn_menu = document.querySelector(".btn-menu")
let menu = document.querySelector(".menu")

btn_menu.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

let sair_menu = document.querySelector(".sair-menu").addEventListener("click", ()=>{
    menu.style.display = "none"
})

let pesquisa = document.querySelector(".pesquisa")
let busca = document.querySelector(".buscar")
let valorPesquisa = ""

busca.addEventListener("click", ()=>{
    valorPesquisa = pesquisa.value
    pesquisa.value = ""
})

// configurção do mapa
var map = L.map('map').setView([-3.732468, -38.519695], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    var marker = L.marker([-3.732468, -38.519695]).addTo(map).bindPopup('<b>Moldsoft Tecnologia</b><br>Eficência operacional.').openPopup();


//produtos
const produtos = [
    {
        nome: "Notebook",
        preco: 3999.99,
        descricao: "Notebook com processador Intel i7 e 16GB RAM.",
        imagem: "./images/notebook.png"
    },
    {
        nome: "Notebook",
        preco: 1999.99,
        descricao: "Smartphone com tela de 6.5 polegadas e câmera de 48MP.",
        imagem: "./images/smartphone.png"
    },
    {
        nome: "Fone de Ouvido",
        preco: 299.99,
        descricao: "Fone de ouvido sem fio com cancelamento de ruído.",
        imagem: "./images/fone.png"
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

