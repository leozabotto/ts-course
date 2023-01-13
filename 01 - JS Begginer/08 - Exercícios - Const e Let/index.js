/*
Luiz Otávio Miranda tem 40 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM ** 2)
let anoNascimento = 2020 - idade

console.log(nome, 'tem',idade,'anos, pesa',peso,'kg\n','tem',alturaEmM,'de altura e seu IMC é de',imc)
console.log(nome,'nasceu em', anoNascimento)

// Conceito de Template String



