exports.middlewareGlobal = (req, res, next) => {
  console.log()
  if(req.body.cliente) {
    console.log(`Vi que você postou ${req.body.cliente}`)
  }
  console.log()

  next()
}

exports.outroMiddleware = (req, res, next) => {
  next()
}