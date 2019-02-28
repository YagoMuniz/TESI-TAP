const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');

const seguranca = {
    autorizaJWT : (req, res) => {
        if(!req.headers.authorization || req.headers.authorization.split(' ')[0] != 'Bearer')
            return res.status(401).send( { auth : false, message : 'Token não informado'} );
        let token = req.headers.authorization.split(' ')[1];
        let decoded = jwt.verify(token, constantes.JWT_SECRET);
        return decoded;
    }
};

module.exports = seguranca;