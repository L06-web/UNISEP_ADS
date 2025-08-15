var nome = "Lucas";
var valor = 249.343;
var status = true;

const pessoas = [];
pessoas.push("João", "Maria", "Ana", "Pedro");

var aluno = {
    nome: "Lucas",
    idade: 20,
    curso: "Analise e Desenvolvimento de Sistemas",
};

console.log("Meu nome é " , nome);
console.log("O valor é " , valor);
console.log("O status é ", status);
console.log('Pessoas: ', pessoas);
console.log("Quantidade de pessoas: " , pessoas.length);
console.log("Dados do aluno: ", aluno);
console.log('');

for (var i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i]);
}

pessas.forEach(function(pessoa) {
    console.log(pessoa);
});