import express from "express";

const app = express();

app.use(express.json());

const pessoas = [];
var countID = 1;

app.get("/", (request, response) => {
    return response.send(pessoas);
});

app.post("/cadastro", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    pessoas.push({
        id: countID++,
        nome,
        telefone
    });

    return response.send({ nome, telefone });
});

app.get("/listar/:nome", (request, response) => {
    const { nome } = request.params;

    const pessoa = pessoas.filter((i) => i.nome === nome);

    return response.send(pessoa);
});

app.put("/atualizar/:id", (request, response) => {
    const { id } = request.params;
    const { nome, telefone } = request.body;

    const pessoaIndex = pessoas.findIndex((i) => i.id == id);

    if (pessoaIndex <= -1) {
        return response.send({ msg: "O código da pessoa não existe!" });
    }

    pessoas[pessoaIndex].nome = nome;
    pessoas[pessoaIndex].telefone = telefone;

    return response.send({ nome, telefone });
});

app.delete("/deletar/:id", (request, response) => {
    const { id } = request.params;

    const pessoasIndex = pessoas.findIndex(i => i.id == id);

    if(pessoasIndex <= -1){
        return response.send({msg : "O Código da pessoa está inválido!"});
    }else{
        pessoas.splice(pessoasIndex,1);
    }    

    return response.send({msg : "Pessoa deletada com sucesso!"});
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});