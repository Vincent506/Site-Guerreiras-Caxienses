const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor da aplicação a rodar na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Equipe_Warriors</h1>
    <h2>Site-Guerreiras</h2>
    <p>Aplicação Node.js rodando com Docker e Nginx.</p>
  `);
});

// Desafio Extra: Rota /sobre
app.get('/sobre', (req, res) => {
  res.send(`
    <h1>Sobre o Projeto</h1>
    <p>Desenvolvido pela Equipe Warriors para a atividade prática de Engenharia de Software II.</p>
  `);
});

// Desafio Extra: Rota /cursos
app.get('/cursos', (req, res) => {
  res.send(`
    <h1>Cursos de Tecnologia</h1>
    <ul>
      <li>Bacharelado em Ciência da Computação</li>
      <li>Análise e Desenvolvimento de Sistemas</li>
      <li>Engenharia de Software</li>
    </ul>
  `);
});

// Mantém o servidor vivo escutando a porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando e aguardando conexões na porta ${port}`);
});