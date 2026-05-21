const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/resumos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resumos_simples.html'));
});

module.exports = app;