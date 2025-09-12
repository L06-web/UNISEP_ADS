import exxpress from 'express';

const app = exxpress();

app.use(exxpress.json());

const usuarios = [];

app.post('/cadastro', (request, response) => {
  const { nome, usuario, senha } = request.body;

  const usuarioExistente = usuario.find(u => u.usuario === usuario);
  if (usuarioExistente) {
    return response.status(400).json({ msg: "Usuário já existe. Por favor, escolha outro nome de usuário." });
  }

  usuario.push({ nome, usuario, senha });

  response.status(201).json({ msg: "Usuário cadastrado com sucesso!" });
});


app.post('/login', (request, response) => {
  const { usuario, senha } = request.body;

  const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (usuarioEncontrado) {

    response.status(200).json({ msg: "Login realizado com sucesso!" });
  } else {

    response.status(401).json({ msg: "Usuário ou senha inválidos!" });
  }
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});