const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');

const seguranca = {
    autorizaJWT : (req, res) => {
        if(!req.headers.authorization || req.headers.authorization.split(' ')[0] != 'Bearer')
            return res.status(401).send( { auth : false, message : 'Token não informado', user: req.body } );
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, constantes.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.status(500).send({
                    auth : false, message : 'Token não autenticado', user: req.body
                });
            } 
            return res.status(200).send({
                auth : true, message : 'Token autenticado', user: req.body
            });
            // req.user = {
            //     username : decoded.username,
            //     roles : decoded.roles,
            //     email : decoded.email
            // };
            // next();
        });
    }
};

module.exports = seguranca;