// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//   titulo: 'Um título de testes',
//   description: 'Uma descrição de testes'
// })
  // .then(dados => console.log(dados))
  // .catch(e => console.log(e))

exports.paginaInicial = (req, res, next) => {
  res.render('index')
  return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}