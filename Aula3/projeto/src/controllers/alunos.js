const express = require('express');
const router = express.Router();
const alunosRepo = require('../repositories/AlunosRepository');
const seguranca = require('../util/seguranca');

router.get('/', (req, res) => {
    res.json(alunosRepo.todos())
});
router.get('/:id', (req, res) => res.json(alunosRepo.recuperar(parseInt(req.params.id))));
router.post('/', (req, res) => {
    seguranca.autorizaJWT(req, res);
    let userJson = JSON.stringify(req.body);
    let user = JSON.parse(userJson);
    console.log(user);
    if(res.statusCode === 200 && user.roles.contains('ADMIN') > -1){
        res.json(alunosRepo.adicionar(req.body));
    }
});
router.put('/:id', (req, res) => {
    res.json(alunosRepo.alterar(parseInt(req.params.id), req.body));
});
router.delete('/:id', (req, res) => {
    res.send(alunosRepo.remover(parseInt(req.params.id)));
});

module.exports = router;