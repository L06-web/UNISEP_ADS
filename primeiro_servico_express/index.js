const express = require('express');

const app = express();

app.get("/alunos", (request, response)=> {
    const filtro = request.query.filtro;
    console.log(filtro);
    const alunos = [
        { nome: "João", 
            idade: 20 },
        { nome: "Maria", 
            idade: 22 },
        { nome: "Pedro", 
            idade: 19 }
    ];
    response.send(alunos);
});


app.listen(8080, () => {
    console.log('Servidor conectado na porta 8080');
});