const express = require('express');
const path = require('path');

// Importando o banco de dados (certifique-se de que o database.js está na mesma pasta)
// Se você usou a Opção 1 (Array fixo), será apenas 'const resumosDB = require('./database.js');'
const db = require('./database.js'); 

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Configurações essenciais
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ==========================================
// 2. ROTAS DAS PÁGINAS (Frontend)
// ==========================================

// Página Inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Página Geral de Resumos (a que tem os cards)
app.get('/resumos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resumos_simples.html'));
});

// ==========================================
// EXPORTAÇÃO (OBRIGATÓRIO PARA O VERCEL)
// ==========================================
module.exports = app;
app.get('/snct1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct1.html'));
});app.get('/snct2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct2.html'));
});app.get('/snct3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snct3.html'));
});
app.get('/resumos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resumos_simples.html'));
});

app.get('/api/resumos-simples', (req, res) => {
    try {
        // Se você usou a Opção 2 (CSV dinâmico), use db.getResumos()
        // Se usou a Opção 1 (Array colado direto no arquivo), use apenas: const dados = db;
        const dados = typeof db.getResumos === 'function' ? db.getResumos() : db;
        
        res.json(dados);
    } catch (erro) {
        console.error("Erro ao buscar resumos:", erro);
        res.status(500).json({ erro: "Erro interno ao buscar dados" });
    }
});



module.exports = app;