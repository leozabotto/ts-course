function soma(x, y) {
  if (
    typeof x !== 'number' ||
    typeof y !== 'number' 
  ) {
    throw new Error('X e Y precisam ser números')
  }
  return x + y;
}

try {
  console.log(soma(1, '2'));
} catch (error) {
  console.log(error)
  console.log('Alguma coisa mais amigável...')
} finally {
  console.log('Sou sempre executado');
}

/////////////////////////////////////////////////

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de date.')
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const hora = retornaHora();
  console.log(hora);
} catch(e) {
  // Tratar erro
} finally {
  console.log('Tenha um bom dia!');
}

