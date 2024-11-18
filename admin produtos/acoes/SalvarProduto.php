<?php
require("conecta.php");

$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) !== TRUE) {
    die("Erro criando banco de dados: " . $conn->error);
}

$conn->select_db($dbname);

$sql = "CREATE TABLE IF NOT EXISTS MinhaTabela (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    descricao TEXT,
    imagem VARCHAR(255),
    email VARCHAR(255),
    numero VARCHAR(20),
    entrega VARCHAR(255)
)";

if ($conn->query($sql) !== TRUE) {
    die("Erro criando tabela: " . $conn->error);
}

$targetDir = "../../Eletro-commerce/src/images/";

if (!is_dir($targetDir)) {
    if (!mkdir($targetDir, 0777, true)) {
        die('Falha ao criar o diretório: ' . $targetDir);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $descricao = $_POST['descricao'];
    $email = $_POST['email'];
    $numero = $_POST['numero'];
    $entrega = $_POST['entrega'];

    $targetFile = $targetDir . basename($_FILES["imagem"]["name"]);
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    $uploadOk = 1;

    $check = getimagesize($_FILES["imagem"]["tmp_name"]);
    if ($check === false) {
        echo "O arquivo não é uma imagem.";
        $uploadOk = 0;
    }

    if ($_FILES["imagem"]["size"] > 9000000) {
        echo "Desculpe, seu arquivo é muito grande.";
        $uploadOk = 0;
    }

    if (!in_array($imageFileType, ['jpg', 'png', 'jpeg', 'gif'])) {
        echo "Desculpe, apenas arquivos JPG, JPEG, PNG & GIF são permitidos.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Desculpe, seu arquivo não foi enviado.";
    } else {
        if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $targetFile)) {
            echo "O arquivo ". htmlspecialchars(basename($_FILES["imagem"]["name"])). " foi enviado.";

            $stmt = $conn->prepare("INSERT INTO MinhaTabela (nome, preco, descricao, imagem, email, numero, entrega) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sdsssss", $nome, $preco, $descricao, $targetFile, $email, $numero, $entrega);

            if ($stmt->execute()) {
                echo "Produto adicionado com sucesso.";
                header("Location: index.php");
                exit();
            } else {
                echo "Erro ao adicionar produto: " . $stmt->error;
            }
        
        $stmt->close();
        } else {
            echo "Desculpe, houve um erro ao enviar seu arquivo.";
        }
    }
}

$conn->close();
?>
