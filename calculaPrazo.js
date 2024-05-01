// Escreva um código (pode ser estilo função JavaScript, método Java ou direto o código do
//     algoritmo) que receba uma quantidade de desenvolvedores, a senioridade deles e pontos
//     de esforço do projeto todo. E que imprima o prazo de entrega.

// Senioridade pontos de esforço
// Junior 1 cada 14 dias
// Pleno 2 cada 7 dias
// Senior 1 por dia
// Lider técnico 3 por dia
// Exemplo:
// function calcularPrazo( [2,3,4,1], [ Junior, Pleno, Senior, LT ], 112 )

// function calculaPrazo(quantDev, senioridade, esforcoProjeto ){
//     const senioridade = {
//         'junior': 1,
//         'pleno': 2,
//         'senior': 1,
//         'LT': 3
//     }
// }

function calcularPrazo(devs, senioridades, pontosDeEsforco) {
    
    // Cria um objeto para mapear a senioridade para a quantidade de pontos de esforço que cada desenvolvedor pode realizar por dia
    const senioridadeParaPontosPorDia = {
      Junior: 1 / 14,
      Pleno: 2 / 7,
      Senior: 1,
      "Lider técnico": 3,
    };
  
    // Calcula a capacidade total da equipe por dia
    const capacidadeTotalDaEquipePorDia = devs.reduce((total, dev, index) => {
      return total + (dev * senioridadeParaPontosPorDia[senioridades[index]]);
    }, 0);
  
    // Verificar se a capacidade total da equipe por dia é zero
    if (capacidadeTotalDaEquipePorDia === 0) {
      console.log("A equipe não tem capacidade para realizar este projeto.");
      return;
    }
  
    // Calcula o prazo de entrega em dias
    const prazoDeEntregaEmDias = pontosDeEsforco / capacidadeTotalDaEquipePorDia;
    console.log(prazoDeEntregaEmDias);
    // Converte o prazo de entrega em dias para semanas
    const prazoDeEntregaEmSemanas = Math.ceil(prazoDeEntregaEmDias / 7);
  
    // Imprime o prazo de entrega
    console.log(`O prazo de entrega é de ${prazoDeEntregaEmSemanas} semanas.`);
  }
  
  // Exemplo de uso
  calcularPrazo([2, 3, 4, 1], ["Junior", "Pleno", "Senior", "LT"], 112);
  