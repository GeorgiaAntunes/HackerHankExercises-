
function fibonacciMaiorAteZero(valor1, valor2) {
    // Função para calcular o próximo número na sequência de Fibonacci
    function proximoFibonacci(numero) {
        if (numero <= 1) {
            return numero;
        } else {
            return proximoFibonacci(numero - 1) + proximoFibonacci(numero - 2);
        }
    }
    // Determinar o maior valor entre os dois
    let maior = Math.max(valor1, valor2);
   
    // Inicializar variáveis para guardar os números anteriores
    let fibAtual = 0;
    let fibProximo = 1;

    while (maior > 0) {
        let fib = proximoFibonacci(maior);
        console.log(fib);
        maior--;
    }
}

// Exemplo de uso da função

fibonacciMaiorAteZero(10, 5);
