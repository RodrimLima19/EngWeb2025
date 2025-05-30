var express = require('express');
var router = express.Router();
var Edicao = require('../controllers/edicoes')

router.get('/', function(req, res, next) {
  if(req.query.papel) {
        Edicao.getPaisesOrganizadores(req.query.papel)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    }
  else if (req.query.nome){
        Edicao.getInfoPais(req.query.nome)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    }
});

module.exports = router;