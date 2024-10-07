const maiorNumero = require('./q1');
const palavraMaisLonga = require('./q2');
const calculaIMC = require('./q3');
const somaMultiplos = require('./q4');
const analisaArray = require('./q5');
const manipulacaoCarro = require('./q6');
const unirArrays = require('./q7');
const contarVogais = require('./q8');
const controleDeCompras = require('./q9');
const manipularArrayPalavras = require('./q10');

let resultados = [];
//-------------TESTE PARA A QUESTÃO 1------------------------
test('Q1 - Deve retornar o maior número entre três inteiros', () => {
  let partialScore = 0;
  if (maiorNumero(1, 5, 3) === 5) partialScore++;
  if (maiorNumero(10, 10, 9) === 10) partialScore++;
  if (maiorNumero(-1, -2, -3) === -1) partialScore++;
  if (maiorNumero(7.5, 2, 3) === null) partialScore++;
  if (maiorNumero(1, 'a', 3) === null) partialScore++;
  resultados.push({ questao: 1, score: (0.5 * partialScore) / 5 });
});
//-------------TESTE PARA A QUESTÃO 2------------------------
test('Q2 - Deve retornar a palavra mais longa encontrada no texto', () => {
  let partialScore = 0;

  if (palavraMaisLonga('O rato roeu a roupa do rei de Roma') === 'roupa')
    partialScore++;
  if (palavraMaisLonga('Nada é impossível!') === 'impossível') partialScore++;
  if (palavraMaisLonga('Caminhar, correr, saltar.') === 'Caminhar')
    partialScore++;
  if (palavraMaisLonga(12345) === null) partialScore++;
  if (palavraMaisLonga('') === '') partialScore++;

  resultados.push({ questao: 2, score: (0.5 * partialScore) / 5 });
});

//-------------TESTE PARA A QUESTÃO 3------------------------
test('Q3 - Deve calcular o IMC corretamente ou retornar null para valores inválidos', () => {
  let partialScore = 0;

  if (calculaIMC(70, 1.75) === 22.9) partialScore++;
  if (calculaIMC(85, 1.8) === 26.2) partialScore++;

  if (calculaIMC(-70, 1.75) === null) partialScore++;
  if (calculaIMC(70, '1.75') === null) partialScore++;
  if (calculaIMC(70, 0) === null) partialScore++;

  resultados.push({ questao: 3, score: (0.5 * partialScore) / 5 });
});
//-------------TESTE PARA A QUESTÃO 4------------------------

test('Q4 - Deve calcular a soma dos múltiplos de 3 e 5 abaixo de um número dado', () => {
  let partialScore = 0;

  if (somaMultiplos(10) === 23) partialScore++;
  if (somaMultiplos(1000) === 233168) partialScore++;
  if (somaMultiplos(15) === 45) partialScore++;
  if (somaMultiplos(0) === null) partialScore++;
  if (somaMultiplos(-10) === null) partialScore++;

  resultados.push({ questao: 4, score: (0.5 * partialScore) / 5 });
});

//-------------TESTE PARA A QUESTÃO 5------------------------
test('Q5 - Deve retornar a análise correta de números pares e ímpares em um array', () => {
  let partialScore = 0;

  const resultado1 = analisaArray([1, 2, 3, 4, 5]);
  if (
    resultado1 &&
    resultado1.quantidadePares === 2 &&
    resultado1.numerosPares.join() === [2, 4].join() &&
    resultado1.quantidadeImpares === 3 &&
    resultado1.numerosImpares.join() === [1, 3, 5].join()
  ) {
    partialScore++;
  }

  const resultado2 = analisaArray([10, 21, 32, 43]);
  if (
    resultado2 &&
    resultado2.quantidadePares === 2 &&
    resultado2.numerosPares.join() === [10, 32].join() &&
    resultado2.quantidadeImpares === 2 &&
    resultado2.numerosImpares.join() === [21, 43].join()
  ) {
    partialScore++;
  }

  if (analisaArray([]) === null) partialScore++;
  if (analisaArray([2, 'a', 4]) === null) partialScore++;

  resultados.push({ questao: 5, score: (1 * partialScore) / 4 });
});
//-------------TESTE PARA A QUESTÃO 6------------------------
test('Q6 - Deve criar e manipular o objeto carro corretamente', () => {
  let partialScore = 0;

  const carro = manipulacaoCarro();

  // Verifica se o objeto 'carro' foi criado corretamente com as propriedades corretas
  if (
    carro.marca === 'Toyota' &&
    carro.modelo === 'Corolla' &&
    carro.anoFabricacao === 2015
  )
    partialScore++;

  // Verifica se a propriedade 'cor' foi adicionada corretamente
  if (carro.cor === 'Preto') partialScore++;

  // Verifica se o método getIdade existe e retorna a idade correta do carro
  const anoAtual = new Date().getFullYear();
  if (
    typeof carro.getIdade === 'function' &&
    carro.getIdade() === anoAtual - carro.anoFabricacao
  )
    partialScore++;

  // Verifica se o método getDescricao existe e retorna a string esperada
  const descricaoEsperada = `O carro marca "Toyota", modelo "Corolla", foi fabricado em 2015 e é da cor "Preto".`;

  if (
    typeof carro.getDescricao === 'function' &&
    carro.getDescricao() === descricaoEsperada
  )
    partialScore++;

  resultados.push({ questao: 6, score: (1.5 * partialScore) / 4 });
});

//-------------TESTE PARA A QUESTÃO 7------------------------
test('Q7 - Deve unir dois arrays e remover duplicados, mantendo a ordem original', () => {
  let partialScore = 0;

  // Testa com dois arrays com duplicados
  const resultado1 = unirArrays([1, 2, 3, 4], [3, 4, 5, 6]);
  if (resultado1.toString() === [1, 2, 3, 4, 5, 6].toString()) {
    partialScore++;
  }

  // Testa com dois arrays sem duplicados
  const resultado2 = unirArrays([7, 8, 9], [9, 10, 11]);
  if (resultado2.toString() === [7, 8, 9, 10, 11].toString()) {
    partialScore++;
  }

  // Testa com um array vazio e outro não vazio
  const resultado3 = unirArrays([], [1, 2, 3]);
  if (resultado3.toString() === [1, 2, 3].toString()) {
    partialScore++;
  }

  // Testa com um array não vazio e outro vazio
  const resultado4 = unirArrays([1, 2, 3], []);
  if (resultado4.toString() === [1, 2, 3].toString()) {
    partialScore++;
  }

  resultados.push({ questao: 7, score: (1 * partialScore) / 4 });
});
//-------------TESTE PARA A QUESTÃO 8------------------------
test('Deve contar corretamente as vogais em uma string', () => {
  let partialScore = 0;

  // Verifica se a função conta corretamente as vogais em uma string
  const resultado1 = contarVogais('Desenvolvimento Web e Mobile');
  if (resultado1.e === 6 && resultado1.o === 3 && resultado1.i === 2)
    partialScore++;

  // Verifica se a função ignora diferenças entre maiúsculas e minúsculas
  const resultado2 = contarVogais('AEIOU aeiou');
  if (
    resultado2.a === 2 &&
    resultado2.e === 2 &&
    resultado2.i === 2 &&
    resultado2.o === 2 &&
    resultado2.u === 2
  )
    partialScore++;

  // Verifica se a função retorna um objeto vazio quando não há vogais
  const resultado3 = contarVogais('bcdfg');
  if (Object.keys(resultado3).length === 0) partialScore++;

  // Verifica se a função retorna um objeto vazio para uma string vazia
  const resultado4 = contarVogais('');
  if (Object.keys(resultado4).length === 0) partialScore++;

  resultados.push({ questao: 8, score: (1 * partialScore) / 4 });
});

//-------------TESTE PARA A QUESTÃO 9------------------------
test('Deve calcular corretamente o controle de compras em um supermercado', () => {
  let partialScore = 0;

  // Testa o cálculo correto com múltiplos itens
  const resultado1 = controleDeCompras([
    { nome: 'Arroz', quantidade: 2, preco: 5 },
    { nome: 'Feijão', quantidade: 1, preco: 7 },
    { nome: 'Leite', quantidade: 3, preco: 3 },
  ]);
  if (
    resultado1.totalGasto === 26 &&
    resultado1.itemMaisCaro.nome === 'Arroz' &&
    resultado1.itemMaisCaro.precoTotal === 10 &&
    resultado1.listaItens.join() === ['Arroz', 'Feijão', 'Leite'].join()
  ) {
    partialScore++;
  }

  // Testa o retorno de null para array vazio
  const resultado2 = controleDeCompras([]);
  if (resultado2 === null) partialScore++;

  // Testa o retorno de null para valores inválidos (quantidade negativa)
  const resultado3 = controleDeCompras([
    { nome: 'Pão', quantidade: -2, preco: 5 },
  ]);
  if (resultado3 === null) partialScore++;

  // Testa com um array de um único item
  const resultado4 = controleDeCompras([
    { nome: 'Biscoito', quantidade: 4, preco: 2 },
  ]);
  if (
    resultado4.totalGasto === 8 &&
    resultado4.itemMaisCaro.nome === 'Biscoito' &&
    resultado4.itemMaisCaro.precoTotal === 8 &&
    resultado4.listaItens.join() === ['Biscoito'].join()
  ) {
    partialScore++;
  }

  resultados.push({ questao: 9, score: (2 * partialScore) / 4 });
});
//-------------TESTE PARA A QUESTÃO 10------------------------
test('Deve manipular corretamente um array de palavras', () => {
  let partialScore = 0;

  const palavras = ['casa', 'arvores', 'carro', 'aviao'];
  const resultado = manipularArrayPalavras(palavras);

  // Verifica se a cópia do array foi criada e convertida para letras maiúsculas
  if (
    resultado.arrayCopia &&
    resultado.arrayCopia.join() ===
      ['INÍCIO', 'CASA', 'ARVORES', 'CARRO', 'AVIAO', 'FIM'].join()
  ) {
    partialScore++;
  }

  // Verifica se a palavra mais longa foi identificada corretamente
  if (resultado.palavraMaisLonga === 'ARVORES') {
    partialScore++;
  }

  // Verifica se o array de palavras que começam com "A" foi criado corretamente
  if (
    resultado.palavrasComA &&
    resultado.palavrasComA.join() === ['ARVORES', 'AVIAO'].join()
  ) {
    partialScore++;
  }

  // Verifica se o array original permaneceu inalterado
  if (
    resultado.arrayOriginal &&
    resultado.arrayOriginal.join() === palavras.join()
  ) {
    partialScore++;
  }

  resultados.push({ questao: 10, score: (1.5 * partialScore) / 4 });
});

afterAll(() => {
  const notaFinal = resultados.reduce((acc, curr) => acc + curr.score, 0);
  console.log('\nResultados por Questão:');
  resultados.forEach((r) =>
    console.log(
      `Questão ${r.questao}: ${
        r.score >= 0.5 * (r.questao < 5 ? 1 : r.questao <= 10 ? 2 : 4)
          ? 'Aprovado'
          : 'Reprovado'
      } - Pontuação: ${r.score}`,
    ),
  );
  console.log('\nNota final:', notaFinal.toFixed(2) + '/10');
});
