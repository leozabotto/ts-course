class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' já ligado')
      return
    }
    this.ligado = true
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já desligado')
      return
    }
    this.ligado = false
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} ${this.modelo} já está ligado`)
    }
    this.ligado = true
  }
}

const s1 = new Smartphone('Apple', 'Space Grey', 'XS Pro Max')
s1.ligar()
s1.ligar()
console.log(s1)