// ==========================================
// LÓGICA DE MENU E ABAS (Mantenha o seu original)
// ==========================================
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
        if (tabcontents[i].id === tabname) {
            tabcontents[i].classList.add("active-tab");
        }
    }
    event.currentTarget.classList.add("active-link");
}

document.querySelectorAll('.submenu > a').forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        const submenuItems = this.nextElementSibling;
        submenuItems.classList.toggle('open');
        this.querySelector('.fas.fa-chevron-down').classList.toggle('rotate');
    });
});

// ==========================================
// LÓGICA DA GALERIA E TABELA DE RESUMOS
// ==========================================
let todosResumos = [];

document.addEventListener('DOMContentLoaded', function () {
    carregarDadosIniciais();
    setupFiltroInterno();
});

function carregarDadosIniciais() {
    // Mostra um "Carregando..." enquanto busca os dados
    const container = document.getElementById('galeria-eventos');
    if(container) container.innerHTML = '<p style="color:white; text-align:center;">Carregando eventos...</p>';

    // Busca os eventos e os resumos da sua API no app.js
    Promise.all([
        fetch('/api/eventos').then(r => r.json()),
        fetch('/api/resumos-simples').then(r => r.json())
    ]).then(([eventos, resumos]) => {
        todosResumos = resumos;
        renderizarCards(eventos, resumos);
    }).catch(err => {
        console.error("Erro ao buscar dados:", err);
        if(container) container.innerHTML = '<p style="color:red; text-align:center;">Erro ao carregar dados.</p>';
    });
}

function renderizarCards(eventos, resumos) {
    const container = document.getElementById('galeria-eventos');
    if(!container) return;
    
    container.innerHTML = ''; // Limpa o "Carregando"

    if (Array.isArray(eventos)) {
        eventos.forEach(evento => {
            // Conta quantos resumos existem para o ID desse evento
            // Ex: SNCT 1 tem evento_id = 1
            const qtdResumos = resumos.filter(r => r.evento_id === evento.id).length;
            
            const div = document.createElement('div');
            div.className = 'card-evento';
            
            // Se tiver imagem de fundo, coloca. Senão, fica o azul padrão.
            if (evento.link_imagem_fundo) {
                div.style.backgroundImage = `url('${evento.link_imagem_fundo}')`;
            } else {
                div.style.backgroundColor = '#1a4a8c'; 
            }

            div.innerHTML = `
                <div class="card-content">
                    <h3>${evento.sigla || evento.nome}</h3>
                    <p>${qtdResumos} resumos publicados</p>
                </div>
            `;

            // Quando clicar no card, abre a tabela passando o ID e o Nome do evento
            div.onclick = () => abrirEvento(evento.id, evento.nome);
            container.appendChild(div);
        });
    }
}

// Guarda o ID do evento atual para o campo de pesquisa (filtro) funcionar
let eventoAtivoId = null;

function abrirEvento(idEvento, nomeEvento) {
    eventoAtivoId = idEvento; // Salva o evento que estamos vendo

    document.getElementById('galeria-eventos').style.display = 'none';
    document.getElementById('painel-resumos').style.display = 'block';
    
    document.getElementById('titulo-evento-ativo').textContent = nomeEvento;
    
    // Filtra no banco de dados só os resumos deste evento
    const resumosDoEvento = todosResumos.filter(r => r.evento_id === idEvento);
    preencherTabela(resumosDoEvento);
}

function voltarParaEventos() {
    eventoAtivoId = null;
    document.getElementById('painel-resumos').style.display = 'none';
    document.getElementById('galeria-eventos').style.display = 'grid';
    document.getElementById('filtro-interno').value = ''; // Limpa a barra de pesquisa
}

function preencherTabela(dados) {
    const tbody = document.getElementById('corpo-tabela-resumos');
    if(!tbody) return;
    
    tbody.innerHTML = '';

    if(dados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" style="text-align: center;">Nenhum resumo encontrado.</td></tr>';
        return;
    }

    dados.forEach(resumo => {
        const tr = document.createElement('tr');
        
        // Arruma o link do PDF (se for link da Vercel ou link externo HTTP)
        let btnPdf = '-';
        if (resumo.link_pdf && resumo.link_pdf.trim() !== '') {
            const linkFormatado = resumo.link_pdf.startsWith('http') ? resumo.link_pdf : `/${resumo.link_pdf}`;
            btnPdf = `<a href="${linkFormatado}" target="_blank" class="btn-link" style="background-color: #d9534f; color: white; padding: 5px 10px; border-radius: 4px; text-decoration: none;">Ver PDF</a>`;
        }

        tr.innerHTML = `
            <td><strong>${resumo.titulo || 'N/A'}</strong></td>
            <td>${resumo.autores || 'N/A'}</td>
            <td style="text-align: center;">${btnPdf}</td>
        `;
        tbody.appendChild(tr);
    });
}

function setupFiltroInterno() {
    const input = document.getElementById('filtro-interno');
    if (!input) return;

    input.addEventListener('input', function() {
        const termo = this.value.toLowerCase();
        
        // Filtra pelo evento ativo e pelo texto que o usuário digitou no título
        const filtrados = todosResumos.filter(r => 
            r.evento_id === eventoAtivoId && 
            r.titulo.toLowerCase().includes(termo)
        );
        
        preencherTabela(filtrados);
    });
}