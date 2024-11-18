<?php
    include("conecta.php");

    $sql = "SELECT * FROM MinhaTabela";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {       
    while($row = $result->fetch_assoc()) {
        echo "<tr>
        <td>" . htmlspecialchars($row["id"]) . "</td>
        <td>" . htmlspecialchars($row["nome"]) . "</td>
        <td>" . htmlspecialchars($row["preco"]) . "</td>
        <td>" . htmlspecialchars($row["descricao"]) . "</td>
        <td>" . htmlspecialchars($row["imagem"]) . "</td>
        <td>" . htmlspecialchars($row["email"]) . "</td>
        <td>" . htmlspecialchars($row["numero"]) . "</td>
        <td>" . htmlspecialchars($row["entrega"]) . "</td>
        <td>
        <form method='post' action='ExcluirProduto.php'>
        <input type='hidden' id='excluir' name='excluir' value='" . htmlspecialchars($row["id"]) . "'/>
        <input type='submit' value='Apagar'/>
        </form>
        </td>
        </tr>";
    }
    } else {
    echo "<tr><td colspan='5'>0 resultados</td></tr>";
    }

    $conn->close();
?>