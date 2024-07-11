const express = require('express');
const https = require('https');

const app = express();
const port = process.env.PORT || 3000;
const url = 'https://sua-api-render.com/endpoint'; // Substitua pelo URL da sua API

app.get('/', (req, res) => {
  https.get(url, (apiRes) => {
    res.send(`Pinged your API: Status Code: ${apiRes.statusCode}`);
  }).on('error', (e) => {
    res.send(`Erro ao pingar a API: ${e.message}`);
  });
});

app.listen(port, () => {
  console.log(`Servidor de ping rodando na porta ${port}`);
  setInterval(() => {
    https.get(url);
  }, 300000); // 300000ms = 5 minutos
});

module.exports = app;