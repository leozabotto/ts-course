// ... rest, ...spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// é possível pular valores [um, , tres, , cinco, , sente]

const numeros2 = [ [1, 2, 3], [4, 5, 6], [5, 8, 9]];
const [, [, , seis]] = numeros2
console.log(seis)