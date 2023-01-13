exports.paginaInicial = (req, res, next) => {
  res.render('index')
  //console.log(`'paginaInicial': Olha o que tem na req.session.nome: ${req.session.nome}`)
  //next()
  return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}