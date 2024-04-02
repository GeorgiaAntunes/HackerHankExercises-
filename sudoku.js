function gerarSudoku() {
    // Inicializa um array 2D para representar o quadro 4x4
    let quadro = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    // Função para verificar se um número é válido para uma determinada posição
    function numeroValido(numero, linha, coluna) {
        // Verifica se o número não está na mesma linha
        for (let i = 0; i < 4; i++) {
            if (quadro[linha][i] === numero) {
                return false;
            }
        }

        // Verifica se o número não está na mesma coluna
        for (let i = 0; i < 4; i++) {
            if (quadro[i][coluna] === numero) {
                return false;
            }
        }

        // Calcula o início do quadrado 2x2
        let inicioLinha = Math.floor(linha / 2) * 2;
        let inicioColuna = Math.floor(coluna / 2) * 2;

        // Verifica se o número não está no quadrado 2x2
        for (let i = inicioLinha; i < inicioLinha + 2; i++) {
            for (let j = inicioColuna; j < inicioColuna + 2; j++) {
                if (quadro[i][j] === numero) {
                    return false;
                }
            }
        }

        // Se passou por todas as verificações, o número é válido
        return true;
    }

    // Função recursiva para preencher o quadro
    function preencherQuadro(linha, coluna) {
        // Verifica se chegamos ao final do quadro
        if (linha === 4) {
            return true;
        }

        // Calcula a próxima posição
        let proximaLinha = coluna === 3 ? linha + 1 : linha;
        let proximaColuna = (coluna + 1) % 4;

        // Tentar preencher cada célula com um número válido
        for (let numero = 1; numero <= 4; numero++) {
            if (numeroValido(numero, linha, coluna)) {
                // Atribui o número à célula atual
                quadro[linha][coluna] = numero;

                // Chama recursivamente para a próxima célula
                if (preencherQuadro(proximaLinha, proximaColuna)) {
                    return true;
                }

                // Se não conseguirmos preencher a próxima célula, tentamos outro número
                quadro[linha][coluna] = 0;
            }
        }

        // Se nenhum número funcionar, voltamos atrás na recursão
        return false;
    }

    // Inicia o preenchimento do quadro a partir da posição (0, 0)
    preencherQuadro(0, 0);

    // Retorna o quadro gerado
    return quadro;
}

// Chamada da função para gerar um quadro Sudoku 4x4
const quadroSudoku = gerarSudoku();

// Imprime o quadro gerado
console.log("Quadro Sudoku 4x4:");
for (let i = 0; i < 4; i++) {
    console.log(quadroSudoku[i].join(" "));
}
