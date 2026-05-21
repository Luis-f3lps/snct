const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração para servir os ficheiros estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ==========================================
// 1. ROTAS DE NAVEGAÇÃO (ENTREGA DE HTML)
// ==========================================

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/resumos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resumos_simples.html'));
});

// ==========================================
// 2. ROTAS DA API - GALERIA DE RESUMOS (resumos.js)
// ==========================================

app.get('/api/eventos', (req, res) => {
    res.json([
        { nome: 'Semana Nacional de Ciência e Tecnologia 2024', sigla: 'SNCT 2024', link_imagem_fundo: '' },
        { nome: 'Semana Nacional de Ciência e Tecnologia 2023', sigla: 'SNCT 2023', link_imagem_fundo: '' }
    ]);
});

app.get('/api/resumos-simples', (req, res) => {
    res.json([
        { evento: 'Semana Nacional de Ciência e Tecnologia 2024', titulo: 'Biomas do Brasil: Saberes e Tecnologias Sociais', autores: 'Eduardo William Sousa, Tatianne Gizelle', link_pdf: '#' },
        { evento: 'Semana Nacional de Ciência e Tecnologia 2024', titulo: 'Desenvolvimento de Sistemas e Infraestrutura de Redes', autores: 'Vanessa Paulino, Carla Gracielle', link_pdf: '#' },
        { evento: 'Semana Nacional de Ciência e Tecnologia 2023', titulo: 'Estudo Técnico sobre a Indústria Regional de Cachaça', autores: 'Diego da Cunha, Willian Andrade', link_pdf: '#' }
    ]);
});

// ==========================================
// 3. ROTAS DA API - DASHBOARD E GRÁFICOS (index.js)
// ==========================================

app.get('/api/tematicas', (req, res) => {
    res.json(['Informática', 'Ciências Agrárias', 'Ciências Biológicas', 'Engenharias', 'Multidisciplinar']);
});

app.get('/api/anos', (req, res) => {
    res.json(['2023', '2024', '2025']);
});

app.get('/api/coordenadores', (req, res) => {
    res.json([
        { nome_coordenador: 'TATIANNE GIZELLE MARQUES SILVA' },
        { nome_coordenador: 'VANESSA PAULINO DA CRUZ VIEIRA RODRIGUES' },
        { nome_coordenador: 'DIEGO DA CUNHA CARVALHO' }
    ]);
});

app.get('/api/stats/tematicas', (req, res) => {
    res.json([
        { tematica: 'Informática', total_projetos: 15 },
        { tematica: 'Ciências Agrárias', total_projetos: 10 },
        { tematica: 'Engenharias', total_projetos: 6 }
    ]);
});

app.get('/api/stats/coordenadores', (req, res) => {
    res.json([
        { nome_coordenador: 'TATIANNE GIZELLE MARQUES SILVA', total_projetos: 8 },
        { nome_coordenador: 'VANESSA PAULINO DA CRUZ VIEIRA RODRIGUES', total_projetos: 5 },
        { nome_coordenador: 'DIEGO DA CUNHA CARVALHO', total_projetos: 4 }
    ]);
});

app.get('/api/portifolio', (req, res) => {
    res.json({
        currentPage: 1,
        totalPages: 1,
        data: [
            { titulo: 'Sistema Merlin de Agendamento de Laboratórios', tematica: 'Informática', nome_coordenador: 'TATIANNE GIZELLE MARQUES SILVA', ano: '2024', processo: '001/2024' },
            { titulo: 'Aplicação de Algoritmos Bio-inspirados em Logística de Distribuição', tematica: 'Informática', nome_coordenador: 'DIEGO DA CUNHA CARVALHO', ano: '2024', processo: '002/2024' }
        ]
    });
});

app.get('/api/produtos', (req, res) => {
    res.json([
        { nome_projeto: 'Portal Web de Anais SNCT', nome_professor: 'TATIANNE GIZELLE MARQUES SILVA', link_produto: 'https://snct-salinas.vercel.app' }
    ]);
});

// Endpoints de suporte aos gráficos estatísticos adicionais
app.get('/api/graficos/eventos', (req, res) => {
    res.json([{ evento: 'SNCT 2024', total: 20 }, { evento: 'SNCT 2023', total: 15 }]);
});

app.get('/api/graficos/tipos', (req, res) => {
    res.json([{ tipo_produto: 'Resumo Simples', total: 35 }]);
});

app.get('/api/graficos/status-produtos', (req, res) => {
    res.json({ com_produto: 30, sem_produto: 5 });
});

app.get('/api/graficos/eventos-agrupados', (req, res) => {
    res.json([{ evento: 'Mostra Académica', total: 25 }, { evento: 'Extensão', total: 10 }]);
});

app.get('/api/graficos/anos', (req, res) => {
    res.json([{ ano: '2023', total: 15 }, { ano: '2024', total: 20 }]);
});

app.get('/api/graficos/genero', (req, res) => {
    res.json([{ sexo: 'Feminino', total: 13 }, { sexo: 'Masculino', total: 12 }]);
});

app.get('/api/graficos/produtos-genero', (req, res) => {
    res.json([{ sexo: 'Feminino', total: 10 }, { sexo: 'Masculino', total: 11 }]);
});

// Fallback genérico para evitar quebras em chamadas secundárias
app.get('/api/*', (req, res) => {
    res.json([]);
});

// Inicialização local
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor a correr localmente na porta ${PORT}`);
    });
}

// Exportação necessária para a arquitetura Serverless da Vercel
module.exports = app;