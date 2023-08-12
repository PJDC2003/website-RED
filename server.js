const express = require('express');
const i18n = require('i18n');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 7000;

// Configurar o mecanismo de renderização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do módulo i18n 
i18n.configure({
  locales: ['en', 'pt'], // Idiomas suportados
  defaultLocale: 'pt', // Idioma padrão (português)
  directory: __dirname + '/locales', // Diretório onde estão os arquivos de tradução (não usado neste caso)
  register: global, // Permite acessar as traduções como globais, como: __('Empresas Patrocinadoras')
  queryParameter: 'lang', // Define o nome do parâmetro de consulta para selecionar o idioma (por padrão, 'lang')
  customHeaders: (req, res) => {
    // Define um cabeçalho personalizado para indicar o idioma selecionado
    return req.query.lang;
  },
  logWarnFn: () => {}, // Desabilita os logs de aviso (opcional)
  objectNotation: false, // Altera para false para usar o formato de tradução simples (não aninhado)
});

// Middleware para configurar o idioma com base no cabeçalho personalizado definido no i18n
app.use(i18n.init);


// Middleware personalizado para adicionar a função '__()' ao res.locals
app.use((req, res, next) => {
  res.locals.__ = res.__;
  next();
});

app.use((req, res, next) => {
  res.locals.i18n = i18n;
  res.locals.lang = req.query.lang || 'pt'; // Defina 'pt' como o idioma padrão caso não seja passado
  next();
});


// Torna o i18n disponível globalmente nos templates
app.use((req, res, next) => {
  res.locals.i18n = i18n; 
  next();
});

app.get('/', (req, res) => {
  res.render('homepage', { i18n, lang: req.query.lang });
});


// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('homepage');
});

// Rota para a página team.ejs
app.get('/team', (req, res) => {
  res.render('team');
});


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});





/* ETAPAS PARA INICIAR O SERVIDOR
1. New Terminal (Ctrl + Shift + ç)
2. node server.js
3. Abrir browser (Chrome, por exemplo) e escrever http://localhost:4000/
*/