var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.entidade) {
    Contrato.getContratosByEntidade(req.query.entidade)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else if(req.query.tipo) {
    Contrato.getContratosByTipo(req.query.tipo)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else {
    Contrato.list()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
});

router.get('/entidades', function(req, res, next) {
  Contrato.findEntidades()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/entidades/:nipc', function(req, res, next) {
  Contrato.getContratosByNIPC(req.params.nipc)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/tipos', function(req, res, next) {
  Contrato.findTipos()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Contrato.findByIdContrato(id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});



router.post('/', function(req, res, next) {
  Contrato.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  Contrato.update(id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  Contrato.delete(id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;