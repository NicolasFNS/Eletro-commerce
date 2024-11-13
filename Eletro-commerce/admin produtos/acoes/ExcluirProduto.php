<?php
require("conecta.php");

$excluir = $_POST['excluir'];

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = $conn->prepare("DELETE FROM MinhaTabela WHERE id = ?");
$sql->bind_param("i", $excluir);

if ($sql->execute() === TRUE) {
    header("location: index.php");
} else {
    echo "Erro: " . $conn->error;
}

$sql->close();
$conn->close();
?>