// A função sabe onde foi declarada e conhece seus vizinhos

const nome = 'Leo';

function falaNome() {
  console.log(nome);
}
falaNome();

function usaFalaNome() {
  const nome = 'Cris'
  falaNome();
}
usaFalaNome();