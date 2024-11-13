const produtoSelecionado = JSON.parse(localStorage.getItem('produtoSelecionado'));
console.log(produtoSelecionado)

const userEmail = localStorage.getItem('userEmail');
console.log(userEmail)

function exibirDetalhesProduto() {
    const produtoDetalhes = document.getElementById('produto-detalhes');

    if (!produtoSelecionado) {
        alert('Nenhum produto encontrado!');
        window.location.href = 'index.html';
        return;
    }

    const detalhesHTML = `
        <section class="detalhes-produto">
            <img src="${produtoSelecionado.imagem}" alt="${produtoSelecionado.nome}">
            <h1>${produtoSelecionado.nome}</h1>
            <p>Preço: R$ ${produtoSelecionado.preco}</p>
            <p>${produtoSelecionado.descricao}</p>
            <a href="index.html" class="button">Volta</a>
        </section>

        <section class="info-adicional">
            <h2>Informações Adicionais</h2>
    
            <div class="contato">
                <h3>Contato do Vendedor</h3>
                <p><span>Email:</span> ${produtoSelecionado.email}</p>
                <p><span>Telefone:</span> ${produtoSelecionado.numero}</p>
                <form id="contactForm">
                    <label>Mensagem para o Vendedor:</label>
                    <textarea id="compradorMensagem" name="compradorMensagem" required></textarea>
                    <br>
                    <button type="submit" class="button">Enviar Email para o Vendedor</button>
                </form>
            </div>
    
            <div class="entrega">
                <h3>Área de Entrega</h3>
                <p>${produtoSelecionado.entrega}</p>
            </div>
        </section>
    `;

    produtoDetalhes.innerHTML = detalhesHTML;
    
}

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const compradorMensagem = document.getElementById("compradorMensagem").value.trim();

    if ( compradorMensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const emailData = {
        vendedor_email: produtoSelecionado.email, 
        comprador_email: userEmail,
        produto_nome: produtoSelecionado.nome,
        produto_preco: produtoSelecionado.preco,
        mensagem: compradorMensagem,
    };

    emailjs.send("service_r9hvoyu", "template_scl14kl", emailData)
        .then(response => {
            alert("Email enviado com sucesso!");
        })
        .catch(error => {
            alert("Erro ao enviar o email: " + JSON.stringify(error));
        });
});

document.addEventListener('DOMContentLoaded', exibirDetalhesProduto);


