var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:25000/edicoes")
    .then(resp => {
      const edicoes = resp.data;
      res.status(200).render('edicoesPage', { 
        title: 'Edições Eurovisão',
        edicoes: edicoes 
      });
    })
    .catch(erro => {
      console.error('Erro ao obter edições:', erro);
      res.render('error', { 
        error: erro,
        message: 'Erro ao carregar a lista de edições' 
      });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get(`http://localhost:25000/edicoes/${req.params.id}`)
    .then(resp => {
      if (!resp.data) {
        throw new Error('Edição não encontrada');
      }
      
      res.status(200).render('edicaoPage', { 
        title: `Edição ${resp.data.anoEdição || 'Desconhecida'}`,
        edicao: resp.data 
      });
    })
    .catch(erro => {
      console.error(`Erro ao obter edição ${req.params.id}:`, erro);
      res.status(404).render('error', { 
        error: erro,
        message: `Edição ${req.params.id} não encontrada` 
      });
    });
});

router.get('/paises/:pais', async function (req, res) {
    try {
        const pais = req.params.pais;
        const response = await axios.get(`http://localhost:25000/paises?nome=${pais}`);
        const dados = response.data;

        res.render('paisPage', { pais: dados.pais, organizou: dados.organizou, participou: dados.participou });
    } catch (erro) {
        res.status(500).send(`Erro ao obter dados do país: ${erro}`);
    }
});

module.exports = router;