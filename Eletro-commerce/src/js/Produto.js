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
    },
    {
    nome: "Tablet",
    preco: 1499.99,
    descricao: "Tablet com tela de 10 polegadas e 64GB de armazenamento.",
    imagem: "./images/tablet.png",
    email: "teste4@gmail.com",
    numero: "(44) 99999-9999",
    entrega: "Entregamos para as regiões de São Paulo e Rio de Janeiro."
},
{
    nome: "Smartwatch",
    preco: 799.99,
    descricao: "Smartwatch com monitoramento de frequência cardíaca e GPS.",
    imagem: "./images/smartwatch.png",
    email: "teste5@gmail.com",
    numero: "(55) 99999-9999",
    entrega: "Entregamos para as regiões de Porto Alegre e Curitiba."
},
{
    nome: "Câmera Digital",
    preco: 2499.99,
    descricao: "Câmera digital de 24MP com zoom óptico de 10x.",
    imagem: "./images/camera.png",
    email: "teste6@gmail.com",
    numero: "(66) 99999-9999",
    entrega: "Entregamos para as regiões de Salvador e Recife."
},
{
    nome: "Smart TV",
    preco: 3499.99,
    descricao: "Smart TV de 55 polegadas com resolução 4K UHD.",
    imagem: "./images/tv.png",
    email: "teste7@gmail.com",
    numero: "(77) 99999-9999",
    entrega: "Entregamos para as regiões de São Paulo e Belo Horizonte."
},
{
    nome: "Console de Video Game",
    preco: 2799.99,
    descricao: "Console de última geração com 1TB de armazenamento.",
    imagem: "./images/console.png",
    email: "teste8@gmail.com",
    numero: "(88) 99999-9999",
    entrega: "Entregamos para as regiões de Brasília e Goiânia."
},
{
    nome: "Roteador Wi-Fi",
    preco: 199.99,
    descricao: "Roteador Wi-Fi dual-band com alta velocidade.",
    imagem: "./images/roteador.png",
    email: "teste9@gmail.com",
    numero: "(99) 99999-9999",
    entrega: "Entregamos para as regiões de Fortaleza e Natal."
},
{
    nome: "Caixa de Som Bluetooth",
    preco: 149.99,
    descricao: "Caixa de som portátil com Bluetooth e resistência à água.",
    imagem: "./images/caixa_som.png",
    email: "teste10@gmail.com",
    numero: "(11) 98888-8888",
    entrega: "Entregamos para as regiões de São Paulo e Santos."
},
{
    nome: "Monitor LED",
    preco: 1199.99,
    descricao: "Monitor LED de 27 polegadas com resolução Full HD.",
    imagem: "./images/monitor.png",
    email: "teste11@gmail.com",
    numero: "(22) 98888-8888",
    entrega: "Entregamos para as regiões de Rio de Janeiro e Niterói."
},
{
    nome: "Teclado Mecânico",
    preco: 349.99,
    descricao: "Teclado mecânico com iluminação RGB.",
    imagem: "./images/teclado.png",
    email: "teste12@gmail.com",
    numero: "(33) 98888-8888",
    entrega: "Entregamos para as regiões de Campinas e Jundiaí."
},
{
    nome: "Mouse Gamer",
    preco: 249.99,
    descricao: "Mouse gamer com sensor de alta precisão e DPI ajustável.",
    imagem: "./images/mouse.png",
    email: "teste13@gmail.com",
    numero: "(44) 98888-8888",
    entrega: "Entregamos para as regiões de São Paulo e Osasco."
},
{
    nome: "Carregador Portátil",
    preco: 99.99,
    descricao: "Carregador portátil com capacidade de 10.000mAh.",
    imagem: "./images/carregador.png",
    email: "teste14@gmail.com",
    numero: "(55) 98888-8888",
    entrega: "Entregamos para as regiões de Porto Alegre e Caxias do Sul."
},
{
    nome: "HD Externo",
    preco: 499.99,
    descricao: "HD externo de 1TB com conexão USB 3.0.",
    imagem: "./images/hd.png",
    email: "teste15@gmail.com",
    numero: "(66) 98888-8888",
    entrega: "Entregamos para as regiões de Salvador e Feira de Santana."
},
{
    nome: "Impressora Multifuncional",
    preco: 699.99,
    descricao: "Impressora multifuncional com scanner e Wi-Fi.",
    imagem: "./images/impressora.png",
    email: "teste16@gmail.com",
    numero: "(77) 98888-8888",
    entrega: "Entregamos para as regiões de São Paulo e Ribeirão Preto."
},
{
    nome: "Drone",
    preco: 1599.99,
    descricao: "Drone com câmera 4K e controle de estabilização.",
    imagem: "./images/drone.png",
    email: "teste17@gmail.com",
    numero: "(88) 98888-8888",
    entrega: "Entregamos para as regiões de Brasília e Uberlândia."
},
{
    nome: "Projetor",
    preco: 2299.99,
    descricao: "Projetor portátil com resolução Full HD e 3000 lúmens.",
    imagem: "./images/projetor.png",
    email: "teste18@gmail.com",
    numero: "(99) 98888-8888",
    entrega: "Entregamos para as regiões de Recife e João Pessoa."
},
{
    nome: "Aspirador de Pó Robô",
    preco: 1299.99,
    descricao: "Aspirador de pó robô com sistema de mapeamento de ambientes.",
    imagem: "./images/aspirador.png",
    email: "teste19@gmail.com",
    numero: "(11) 97777-7777",
    entrega: "Entregamos para as regiões de São Paulo e Sorocaba."
},
{
    nome: "Smart Lâmpada",
    preco: 89.99,
    descricao: "Lâmpada inteligente compatível com comandos de voz.",
    imagem: "./images/lampada.png",
    email: "teste20@gmail.com",
    numero: "(22) 97777-7777",
    entrega: "Entregamos para as regiões de Rio de Janeiro e Petrópolis."
},
{
    nome: "Purificador de Ar",
    preco: 899.99,
    descricao: "Purificador de ar com filtro HEPA e controle via app.",
    imagem: "./images/purificador.png",
    email: "teste21@gmail.com",
    numero: "(33) 97777-7777",
    entrega: "Entregamos para as regiões de Campinas e São José dos Campos."
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

