// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//   titulo: 'Um título de testes',
//   description: 'Uma descrição de testes'
// })
  // .then(dados => console.log(dados))
  // .catch(e => console.log(e))

exports.paginaInicial = (req, res, next) => {
  // console.log(req.session.usuario = { nome: 'Leo', logado: true })
  // console.log(req.session.usuario)



  req.flash('info', 'Informação')
  req.flash('error', 'Senha incorreta')
  req.flash('sucess', 'Olá mundo!')
  res.render('index')
  
  /* flash some após primeira exibição */
  // console.log(req.flash('error'))
  
  
  return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}