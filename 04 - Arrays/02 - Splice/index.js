//                -5      -4       -3         -2          -1
//                 0       1        2          3           4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel',  'Júlia']

// nomes.splice(íncice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(3, 0, 'Leo', 'Cris', 'Nildo')
console.log(nomes, removidos)

/*

pop -> nomes.splice(-1, 1)
shift -> nomes.splice(0, 1)
push -> nomes.splice(-1, 0, 'Adicionado')
unshift -> nomes.splica(0, 0, 'Adicionado')

*/