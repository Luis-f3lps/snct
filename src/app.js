const express = require('express');
const path = require('path');

// Importa o seu arquivo database.js
const resumosDB = require('../database.js'); 

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/snct1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct1.html'));
});
app.get('/snct4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct4.html'));
});
app.get('/snct2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct2.html'));
});

app.get('/snct3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct3.html'));
});


app.get('/api/resumos-simples', (req, res) => {
    res.json(resumosDB);
});

module.exports = app;