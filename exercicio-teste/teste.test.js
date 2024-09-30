const parOuImpar = require('./exercicio1');
const somaArray = require('./exercicio2');
const fatorial = require('./exercicio3');
const inverterArray = require('./exercicio4');
const contarVogais = require('./exercicio5');
const multiplicarEOrdenar = require('./exercicio6');
const manipularArray = require('./exercicio7');

describe('Testes das funções', () => {
  // Testes
  test('Verifica se 4 é par', () => {
    expect(parOuImpar(4)).toBe('par');
  });

  test('Verifica se 3 é ímpar', () => {
    expect(parOuImpar(3)).toBe('ímpar');
  });

  test('Soma de [1, 2, 3] deve ser 6', () => {
    expect(somaArray([1, 2, 3])).toBe(6);
  });

  test('Fatorial de 5 deve ser 120', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('Inverter [1, 2, 3] deve retornar [3, 2, 1]', () => {
    expect(inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  // Teste para contarVogais
  test('Contar vogais em "banana" deve retornar 3', () => {
    expect(contarVogais('banana')).toBe(3);
  });

  // Teste para multiplicarEOrdenar
  test('Multiplicar e ordenar [3, 1, 2] deve retornar [2, 4, 6]', () => {
    expect(multiplicarEOrdenar([3, 1, 2])).toEqual([2, 4, 6]);
  });

  // Teste para manipularArray
  test('Manipular array [1, 2, 3, 4] deve retornar 6', () => {
    expect(manipularArray([1, 2, 3, 4])).toBe(6); // (2, 4) -> soma = 6
  });
});

// Exibir resultados
console.log('Resultados dos Testes:');
