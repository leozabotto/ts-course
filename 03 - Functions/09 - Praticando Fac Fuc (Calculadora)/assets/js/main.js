function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
      
        if(!conta) {
          alert("Conta inválida.");
          return;
        }

        this.display.value = String(conta);
      
      } catch(e) {
        alert("Conta inválida.");
        return;
      }
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener('click', e => {
        const el = e.target;
        console.log(e)
        if (el.classList.contains('btn-number')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
      });
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        } 
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    }

    

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();