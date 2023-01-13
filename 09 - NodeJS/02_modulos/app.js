const multiplicacao = require('./mod1');
console.log(multiplicacao(2,2))

// CAMINHOS

// __filename
// __dirname

const path = require('path')

console.log(path.resolve(__dirname))
console.log(path.resolve(__dirname,'..','..'))