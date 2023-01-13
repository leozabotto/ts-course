const nomes = ['Eduardo', 'Maria', 'Joana']

nomes[2] = 'João';

const novo = [...nomes]

delete nomes[2] // Deleta e não afeta índice
console.log(nomes)

// slice(inicio, final) / (inicio, - fim)