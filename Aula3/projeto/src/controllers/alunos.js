const express = require('express');
const router = express.Router();
const alunosRepo = require('../repositories/AlunosRepository');
const seguranca = require('../util/seguranca');

router.get('/', (req, res) => {
    res.json(alunosRepo.todos())
});
router.get('/:matricula', (req, res) => res.json(alunosRepo.recuperar(req.params.matricula)));
router.post('/', (req, res) => {
    let result = seguranca.autorizaJWT(req, res, ()=>{ console.log("Ok") });
    let user = req.user;
    if(user.roles.includes("ADMIN"))
        res.json(alunosRepo.adicionar(req.body));
    else
        res.sendStatus(401);
});
router.put('/:id', (req, res) => {
    res.json(alunosRepo.alterar(parseInt(req.params.id), req.body));
});
router.delete('/:id', (req, res) => {
    res.send(alunosRepo.remover(parseInt(req.params.id)));
});

module.exports = router;