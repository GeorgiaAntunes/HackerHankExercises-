// Escreva um código (pode ser estilo função JavaScript que receba um nome e informe quantas vezes letras se repetem (não
//     conte a primeira)
function contarRepeticoes(nome) {
    // Converte o nome para minúsculas para tornar a contagem de letras case-insensitive
    nome = nome.toLowerCase();

    // Objeto para armazenar as contagens de cada letra
    let contagem = {};

    // Itera sobre cada letra do nome, começando da segunda letra (índice 1)
    for (let i = 1; i < nome.length; i++) {
        let letra = nome[i];

        // Se a letra já estiver no objeto de contagem, incrementa sua contagem
        // Caso contrário, inicializa sua contagem como 1
        if (contagem[letra]) {
            console.log(contagem[letra]);
            contagem[letra]++;
        } else {
            contagem[letra] = 1;
        }
    }

    // Retorna o objeto de contagem
    return contagem;
}

// Exemplo de uso
let nome = "Joao Carlos";
let resultado = contarRepeticoes(nome);
console.log(resultado);