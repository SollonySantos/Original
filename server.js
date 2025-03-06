const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});