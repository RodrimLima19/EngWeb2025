var express = require('express');
var router = express.Router();
var Edicao = require('../controllers/edicoes')

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.org) {
        Edicao.getByOrganizacao(req.query.org)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    }
    else {
    Edicao.list()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
    }
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Edicao.findByIdEdicao(id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.post('/', function(req, res, next) {
  Edicao.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  Edicao.update(id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  Edicao.delete(id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;