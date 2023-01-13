// Função Fábrica (Factory Function)
// Função Construtora (Constructor Function)
function  criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,
    
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    
    fala(assunto) {
      return `${nome} está ${assunto}.`;
    },
    altura,
    peso,
    // Getter
    get imc() {
      const imc = this.peso / (this.altura  ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Leo', 'Z. L.', 1.84, 84);
console.log(p1.fala('falando sobre TS'));

p1.nomeCompleto = 'Leonardo Z. L.';

console.log(p1.nome);
console.log(p1.sobrenome);
