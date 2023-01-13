// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  this.estoque = estoque

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque,
    writable: false,
    configurable: true // reconfigurável
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome,
      writable: false,
      configurable: true // reconfigurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco,
      writable: false,
      configurable: true // reconfigurável
    }
  })

}



const p1 = new Produto('Camiseta')
console.log(p1.nome)
console.log(Object.keys(p1))