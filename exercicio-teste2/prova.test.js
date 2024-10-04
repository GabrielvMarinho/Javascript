const somaNumeros = require('./q1');
const ehPar = require('./q2');
const fizzBuzz = require('./q3');
const somaFibonacciPares = require('./q4');
const manipulacaoArrayLinguagens = require('./q5');
const manipulacaoObjeto = require('./q6');
const elementosComuns = require('./q7');
const encontrarDuplicados = require('./q8');
const criarEstudante = require('./q9');
const manipularArray = require('./q10');

let resultados = [];


  test('Q1: Soma de dois números', () => {
    const partialScore =
      (somaNumeros(2, 3) === 5) +
      (somaNumeros(-1, 1) === 0) +
      (somaNumeros(3.5, 2.7) === 6.2) +
      Number.isNaN(somaNumeros('a', 2));
    resultados.push({ questao: 1, score: (0.5 * partialScore) / 4 });
  });

  test('Q2: Verifica se um número é par', () => {
    const partialScore =
      (ehPar(2) === true) +
      (ehPar(3) === false) +
      (ehPar(0) === true) +
      (ehPar(-4) === true) +
      (ehPar(3.5) === null) +
      (ehPar('a') === null);
    resultados.push({ questao: 2, score: (0.5 * partialScore) / 6 });
  });

  test('Q3: FizzBuzz', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    fizzBuzz();
    const partialScore =
      (consoleLogSpy.mock.calls[2][0] === 'Fizz') +
      (consoleLogSpy.mock.calls[4][0] === 'Buzz') +
      (consoleLogSpy.mock.calls[14][0] === 'FizzBuzz');
    consoleLogSpy.mockRestore();
    resultados.push({ questao: 3, score: (0.5 * partialScore) / 3 });
  });

  test('Q4: Soma dos termos pares da sequência de Fibonacci', () => {
    const result = somaFibonacciPares();
    resultados.push({ questao: 4, score: (result === 60696) * 0.5 });
  });

  /**
 * Teste para a Questão 5: Manipulação de Array de Linguagens de Programação
 *
 * Este teste verifica se a função manipulacaoArrayLinguagens executa corretamente
 * todas as operações especificadas no array de linguagens de programação e retorna
 * os resultados esperados para cada operação.
 */
test('Q5: Manipulação de Array de Linguagens', () => {
  const result = manipulacaoArrayLinguagens();
  const expectedFinalArray = ['Rust', 'Python', 'TypeScript', 'Go', 'Java', 'C++', 'Ruby'];
  const expectedVersoes = [2010, 1991, 2012, 2009, 1995, 1985, 1995];
  const expectedModernas = [ 'Rust', 'TypeScript', 'Go' ];

  // Verificação do array final após todas as modificações
  const finalArrayCheck = result.linguagensFinal.every((elem, index) => elem === expectedFinalArray[index]);

  // Verificação do tamanho do array
  const lengthCheck = result.tamanhoArray === 7;

  // Verificação do array de versões
  const versoesCheck = result.versoes.every((elem, index) => elem === expectedVersoes[index]);

  // Verificação do array de linguagens modernas
  const modernasCheck = result.modernas.every((elem, index) => elem === expectedModernas[index]);

  // Cálculo da pontuação: cada parte correta contribui proporcionalmente para a pontuação total de 1.5
  const partialScore = (finalArrayCheck + lengthCheck + versoesCheck + modernasCheck) / 4;
  const score = 1.5 * partialScore;

  // Adiciona o resultado ao array de resultados com o formato padrão
  resultados.push({ questao: 5, score: score });

  // Impressões de console para visualização do teste
  console.log(`Array Final: ${finalArrayCheck ? 'Correto' : 'Incorreto'}`);
  console.log(`Tamanho do Array: ${lengthCheck ? 'Correto' : 'Incorreto'}`);
  console.log(`Versões: ${versoesCheck ? 'Correto' : 'Incorreto'}`);
  console.log(`Modernas: ${modernasCheck ? 'Correto' : 'Incorreto'}`);

});

  
    test('Q6: Manipulação de Objeto de Livro', () => {
      const livro = manipulacaoObjeto();
  
      const idadeEsperada = new Date().getFullYear() - 1992;
      const descricaoEsperada =
        'O livro "O Alquimista" foi escrito por "Paulo Coelho" e publicado em "1992".';
  
      // Calcula a pontuação baseada em todas as verificações
      let pontuacao =
        livro.titulo === 'O Alquimista' &&
        livro.autor === 'Paulo Coelho' &&
        livro.anoPublicacao === 1992 &&
        livro.editora === 'Rocco' &&
        livro.getIdade() === idadeEsperada &&
        livro.getDescricao() === descricaoEsperada
          ? 1.5
          : 0;
  
      // Adiciona o resultado ao array de resultados com o formato padrão
      resultados.push({ questao: 6, score: pontuacao });
    });
  
  
  test('Q7: Deve encontrar elementos comuns entre dois arrays', () => {
    const array1 = [1, 2, 3, 4, 5, 10, 15, 16];
    const array2 = [3, 4, 5, 6, 7, 15, 24];
    const resultadoEsperado = [3, 4, 5, 15];

    const resultado = elementosComuns(array1, array2);

    // Verifica se o resultado é igual ao esperado
    expect(resultado).toEqual(expect.arrayContaining(resultadoEsperado));
    expect(resultado).toHaveLength(resultadoEsperado.length);

    // Adiciona o resultado ao array de resultados com o formato padrão
    resultados.push({ questao: 7, score: (resultado.length === resultadoEsperado.length) ? 1 : 0 });

    // Imprime resultados para a depuração, se necessário
    console.log(`Questão 7: ${(resultado.length === resultadoEsperado.length) ? 'Aprovado' : 'Reprovado'} - Pontuação: ${(resultado.length === resultadoEsperado.length) ? 0.5 : 0}`);
});

  test('Q8: Encontrar caracteres duplicados em uma string', () => {
    const resultado = encontrarDuplicados('programacao web e mobile');
    const esperado = { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 };

    const allKeysMatch = Object.keys(esperado).every(
      (key) =>
        resultado.hasOwnProperty(key) && resultado[key] === esperado[key],
    );
    const correctKeyLength =
      Object.keys(resultado).length === Object.keys(esperado).length;
    const pontuacao = allKeysMatch && correctKeyLength ? 1 : 0;
    resultados.push({ questao: 8, score: pontuacao });
  });

  test('Q9: Objeto Estudante', () => {
    const estudante = criarEstudante();
    
    // Verificação das propriedades iniciais
    const propriedadesCorretas = !!estudante.nome && !!estudante.idade && typeof estudante.nota1 === 'number' && typeof estudante.nota2 === 'number' && typeof estudante.nota3 === 'number';
    
    // Cálculo da média das notas
    const mediaCalculada = estudante.media();
    const mediaEsperada = (estudante.nota1 + estudante.nota2 + estudante.nota3) / 3;
    const mediaCheck = mediaCalculada === mediaEsperada;
  
    // Verificação da situação do estudante
    const situacaoCalculada = estudante.situacao();
    const situacaoEsperada = mediaEsperada >= 7 ? 'Aprovado' : 'Reprovado';
    const situacaoCheck = situacaoCalculada === situacaoEsperada;
  
    // Cálculo da pontuação: cada parte correta contribui proporcionalmente para a pontuação total de 1
    const partialScore = (propriedadesCorretas + mediaCheck + situacaoCheck) / 3;
    const score = 1 * partialScore; // Alterar para o peso da questão, se necessário
  
    // Evitar NaN, garantindo que a pontuação seja um número
    const finalScore = isNaN(score) ? 0 : score;
  
    // Adiciona o resultado ao array de resultados com o formato padrão
    resultados.push({ questao: 9, score: finalScore });
  
    // Impressões de console para visualização do teste
    console.log('Questão 9');
    console.log(`Propriedades: ${propriedadesCorretas ? 'Corretas' : 'Incorretas'}`);
    console.log(`Média: ${mediaCheck ? 'Correta' : 'Incorreta'}`);
    console.log(`Situação: ${situacaoCheck ? 'Correta' : 'Incorreta'}`);
  });
  
/**
 * Teste para a Questão 10: Manipulação de Array de Números
 *
 * Este teste verifica se a função manipularArray executa corretamente todas as operações especificadas
 * no array de números e retorna os resultados esperados para cada operação.
 */
test('Q10: Manipulação de Array de Números', () => {
  const numeros = [1, 2, 3, 4, 5];
  const resultado = manipularArray(numeros);

  // Verificação da cópia do array após todas as operações
  const expectedArrayCopia = [ 0, 2, 3, 4, 10 ];
  const arrayCopiaCheck = resultado.arrayCopia.every((elem, index) => elem === expectedArrayCopia[index]);

  // Verificação da soma dos números no array copia
  const somaCheck = resultado.soma === 19; // 2 + 3 + 4

  // Verificação do maior número no array copia
  const maiorNumeroCheck = resultado.maiorNumero === 10;

  // Verificação do array de números pares
  const expectedNumerosPares = [ 0, 2, 4, 10 ];
  const numerosParesCheck = resultado.numerosPares.every((elem, index) => elem === expectedNumerosPares[index]);

  // Cálculo da pontuação: cada parte correta contribui proporcionalmente para a pontuação total de 2
  const partialScore = (arrayCopiaCheck + somaCheck + maiorNumeroCheck + numerosParesCheck) / 4;
  const score = 2 * partialScore;

  // Adiciona o resultado ao array de resultados com o formato padrão
  resultados.push({ questao: 10, score: score });

  // Impressões de console para visualização do teste
  console.log('Questão 10');
  console.log(`Array Copia: ${arrayCopiaCheck ? 'Correto' : 'Incorreto'}`);
  console.log(`Soma: ${somaCheck ? 'Correta' : 'Incorreta'}`);
  console.log(`Maior Número: ${maiorNumeroCheck ? 'Correto' : 'Incorreto'}`);
  console.log(`Números Pares: ${numerosParesCheck ? 'Corretos' : 'Incorretos'}`);
});



afterAll(() => {
  const notaFinal = resultados.reduce((acc, curr) => acc + curr.score, 0);
  console.log('\nResultados por Questão:');
  resultados.forEach((r) =>
    console.log(
      `Questão ${r.questao}: ${
        r.score >= 0.5 * (r.questao < 5 ? 1 : r.questao <= 9 ? 2 : 4)
          ? 'Aprovado'
          : 'Reprovado'
      } - Pontuação: ${r.score}`,
    ),
  );
  console.log('\nNota final:', notaFinal.toFixed(2) + '/10');
});