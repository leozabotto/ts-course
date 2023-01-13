const { texto, arquivos } = require('./base');

// * (opcional) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcional) 0 ou 1 {0, 1}
// {n, m}

// \ Caractere de Escape

const regExp1 = /Jo+ão+/gi;
console.log(texto.match(regExp1));

// const regExp2 = /\.(jpg|jpeg)/gi;
// const regExp2 = /\.(jpe?g)/gi;
// const regExp2 = /\.(jpe{0,}g)/gi;
const regExp2 = /\.(jp(e|E)?g)/g;
for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(regExp2));
}
