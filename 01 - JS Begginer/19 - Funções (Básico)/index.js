function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
  return 'Oi';
}

saudacao('Leo');
saudacao('Zabotto');

// É possível salvar o retorno de 
// uma função numa variável

const oi = saudacao('Leo');

// Existem várias forma de crar função

// 1. Função Tradicional
// 2. Anônima
// 3. Arrow 
