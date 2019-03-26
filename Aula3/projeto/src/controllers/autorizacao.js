
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const constantes = require('../config/constantes');

router.post('/login', (req, res) => {
    let payload = undefined;
    if(req.body.username === 'admin' && req.body.password === 'admin'){
        payload = {
            username : 'admin',
            roles: ['ADMIN', 'USER'],
            email : 'admin@email.com'
        };
        
    } else if(req.body.username === 'user' && req.body.password === 'user'){
        payload = {
            username : 'user',
            roles: ['USER'],
            email : 'user@email.com'
        };
    }
    
    if(payload){
        var token = jwt.sign({ payload }, constantes.JWT_SECRET, { expiresIn: 3000 });
        res.status(200).send({ auth : true, token: token, user: payload });
    }else{
        res.status(500).send('Login inválido!');
    }




});

module.exports = router;