const express = require('express');
const app = express();
const path = require('path');

// Configurar o mecanismo de renderização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});


/* ETAPAS PARA INICIAR O SERVIDOR
1. New Terminal (Ctrl + Shift + ç)
2. node server.js
3. Abrir browser (Chrome, por exemplo) e escrever http://localhost:3000/
*/