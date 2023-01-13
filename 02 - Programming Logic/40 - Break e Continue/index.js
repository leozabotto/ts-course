const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  
  if (numero == 2 || numero == 5) {
    continue;
  }
  
  console.log(numero);

  if (numero === 7) {
    break;
  }
}

// Cuidado com While (atualizar a variável de controle antes)