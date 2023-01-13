class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  aumentarVolume() {
    this.volume += 2
  }

  //  Método de instância
  diminuirVolume() {
    this.volume -= 2
  }

  // Método Estático
  static trocaPilha() {
    console.log('Pilha trocada.')
    // Não dá pra usar o new
  }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha()