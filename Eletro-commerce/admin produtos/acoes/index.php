<!DOCTYPE html>
<html>
<head>
    <title>Cadastro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  
    <h1>Adicionar Novo Produto</h1>
    <form class="form" action="./SalvarProduto.php" method="POST" enctype="multipart/form-data">
        <label>Nome:</label>
        <input type="text" name="nome" required><br>

        <label>Preço:</label>
        <input type="number" name="preco" step="0.01" required><br>

        <label>Descrição:</label>
        <textarea name="descricao" required></textarea><br>

        <label>Imagem:</label> 
        <input type="file" name="imagem" accept="image/*" required><br> 
        <label>Email:</label>
        <input type="email" name="email" required><br>

        <label>Número de Contato:</label>
        <input type="text" name="numero" required><br>

        <label>Regiões de Entrega:</label>
        <input type="text" name="entrega" required><br>

        <button type="submit">Salvar Produto</button>
    </form>

    <table>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <?php include("ListarProduto.php"); ?>
        </tr>
    </table>
    
    
</body>
</html>
