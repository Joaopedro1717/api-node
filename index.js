var express = require('express');
var server = express();

// Criando uma rota get test
server.get('/test', (req,res) => {
    var data = {
        ok: true,
        message: 'Olá, João Pedro! Você está usando o verbo GET'
    };
    return res.json(data);
});
//Criando um servidor na porta http://localhost:3000
server.listen(3000);
console.log('Criando servidor e rodando na porta 3000');