const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORTA = 3000


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/auth', require('./controllers/autorizacao'));
app.use('/alunos', require('./controllers/alunos'));


app.get('*', (req, res) => res.send('404'));

app.listen(PORTA, () => {
    console.log('Escutando em http://localhost:' + PORTA);
})