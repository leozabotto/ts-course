/**
 * Escreva uma função que recebe um número e retorna o seguinte:
 * 1. Número é divisível por 3 = Fizz
 * 2. Número é divisível por 5 = Buzz
 * 3. Número é divisível por 3 e 5 = FizzBuzz
 * 4. Número NÃO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente o número
 * Use a função com números de 0 a 100
 */

 function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
 }

 for (let i = 0; i <= 100; i++) {
   console.log(i, fizzBuzz(i))
 }