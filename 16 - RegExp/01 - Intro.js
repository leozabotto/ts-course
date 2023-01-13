/* 

Expressões Regulares (REGEX) são utilizadas para encontrar padrões
em strings (possibilitando fazer "o que quiser" com ela)

* Documentação -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions


** Flags **

g   - global (encontra todas as ocorrências)
i   - insensetive
(()())  - grupos
| - ou

*/

const { texto } = require('./base');

const regExp1 = /João/gi;

console.log(regExp1.test(texto));
console.log(regExp1.exec(texto));

const regExp2 = /(maria)(, hoje sua esposa)/i;
const found = regExp2.exec(texto);

console.log(found);
console.log(found.index);
console.log(found.input);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}

const arrayContatos = [
  {
    nome: 'Luiz',
    telefone: '119939231290',
    status: true,
  },
  {
    nome: 'Juliana',
    telefone: '11962448442',
    status: true,
  },
];

Model.bulkCreate(arrayContatos);
