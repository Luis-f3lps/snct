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

app.get('/snct2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct2.html'));
});

app.get('/snct3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct3.html'));
});

app.get('/resumos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resumos_simples.html'));
});

app.get('/api/eventos', (req, res) => {
    res.json([
        { id: 1, nome: 'I Semana Nacional de Ciência e Tecnologia 2021', sigla: 'SNCT 1', link_imagem_fundo: '' },
        { id: 2, nome: 'III Simpósio de Veterinária', sigla: 'Simpósio Vet', link_imagem_fundo: '' }
    ]);
});

app.get('/api/resumos-simples', (req, res) => {
    res.json(resumosDB);
});

module.exports = app;