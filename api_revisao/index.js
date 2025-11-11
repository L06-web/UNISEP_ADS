import express from "express";
import knex from "knex";

const db = knex({
  client: "mysql",
  connection: {
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'Lucas@06',
    database: 'aluno',
  },
});


const app = express();

app.use(express.json());    

app.get("/", (request, response) => {
    response.send("API de Revisão funcionando!");

});

app.post("/aluno", [validarNome],(request, response) => {
    const {nome, ra} = request.body;    
    console.log(`Aluno ${nome} com RA ${ra} cadastrado com sucesso!`);
    response.send(`Aluno ${nome} com RA ${ra} cadastrado com sucesso!`);
});

function validarNome(req, res, next) {

}

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

