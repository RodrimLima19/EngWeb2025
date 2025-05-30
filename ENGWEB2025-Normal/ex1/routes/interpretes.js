var express = require('express');
var router = express.Router();
var Edicao = require('../controllers/edicoes');

router.get('/', function(req, res, next) {
    Edicao.getInterpretes()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;