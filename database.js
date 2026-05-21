const resumos = [
    {
        "id": 1,
        "titulo": "A ARTE DA CONTAÇÃO DE HISTÓRIAS PARA CRIANÇAS HOSPITALIZADAS",
        "autores": "Waneza Maria de Jesus Souza, Giuliana de Sá Ferreira Barros",
        "link_pdf": "snct3/1.pdf",
        "evento_id": 1
    },
    {
        "id": 22,
        "titulo": "INFÂNCIA, RACISMO E EDUCAÇÃO: A CONSTRUÇÃO DE UMA ESCOLA INCLUSIVA",
        "autores": "Jane da Silva Pereira jdsp5, Emanuelle Barbosa Madureira, Jaciely Soares da Silva, Priscila dos Santos Araújo, Samara Sarmento Pereira Pardim Santos",
        "link_pdf": "snct3/22.pdf",
        "evento_id": 1
    },
    {
        "id": 23,
        "titulo": "INFLUÊNCIA DO SOMBREAMENTO E DO VOLUME DO TUBETE NA PRODUÇÃO DE MUDAS DE CANAFÍSTULA",
        "autores": "Marília Dutra Massad, Vailton Sena Silva, Thárcio Ferreira Durães Freire, Samuel Clevio Pereira, Tiago Reis Dutra",
        "link_pdf": "snct3/23.pdf",
        "evento_id": 1
    },
    {
        "id": 65,
        "titulo": "DESEMPENHO DE NOVILHOS EM TERMINAÇÃO INTENSIVA A PASTO",
        "autores": "Anna Karoliny Neves Lisboa",
        "link_pdf": "3simposio_vet/21.pdf",
        "evento_id": 2
    },
    {
        "id": 74,
        "titulo": "LEITE A2A2: USO DO TESTE COMERCIAL NA IDENTIFICAÇÃO DE VACAS COM O GENÓTIPO EM REBANHO LEITEIRO NO MUNICÍPIO DE SALINAS/MG.",
        "autores": "Larissa Mayara Dias Silveira, Wislla Antônia Oliveira Viana, Susi Cristina dos Santos Guimarães Martins, Josiane Silva Freire, Heliomar José dos Santos, Juliana Zara Brondi Mendes",
        "link_pdf": "3simposio_vet/30.pdf",
        "evento_id": 2
    },
    {
        "id": 75,
        "titulo": "NOVILHOS NELORES TERMINADOS EM CONFINAMENTO APÓS SUPLEMENTAÇÃO A PASTO NA RECRIA",
        "autores": "Gabryella Rocha Gusmão, Rogério Mendes Murta, Edmilson Tadeu Cassani, Maria de Fátima Batista Freitas, Matheus Ribeiro Paraíso, Ketley Lavinni Silva Gusmão",
        "link_pdf": "3simposio_vet/31.pdf",
        "evento_id": 2
    },
    {
        "id": 83,
        "titulo": "SUPLEMENTAÇÃO A PASTO NA FASE DE RECRIA E SEU EFEITO NA TERMINAÇÃO EM CONFINAMENTO DE NOVILHOS NELORE",
        "autores": "Dielle Cawane Lopes Gonçalves dclg",
        "link_pdf": "3simposio_vet/39.pdf",
        "evento_id": 2
    },
    {
        "id": 5,
        "titulo": "APRENDENDO COM O LÚDICO: O BINGO SILÁBICO COMO FERRAMENTA DE ALFABETIZAÇÃO NO 1º ANO",
        "autores": "Maria iara Silva Rodrigues",
        "link_pdf": "snct3/5.pdf",
        "evento_id": 1
    },
    {
        "id": 6,
        "titulo": "ASPECTOS GERAIS DO DESEMPENHO DA PITAYA (HYLOCEREUS SPP.) NAS CONDIÇÕES EDAFOCLIMÁTICAS DE SALINAS, MG.",
        "autores": "Susi Cristina dos Santos Guimarães Martins, Élcio José do Nascimento, Sérgio Fernandes Ferreira, Ellen Luiza Paulino Simões, Osmar Correia Primo",
        "link_pdf": "snct3/6.pdf",
        "evento_id": 1
    },
    {
        "id": 136,
        "titulo": "ANÁLISE COMPARATIVA DO TESTE RÁPIDO IMUNOCROMATOGRÁFICO TR-DPP® E IMUNOENZIMÁTICO ELISA NO DIAGNÓSTICO DA LEISHMANIOSE VISCERAL CANINA",
        "autores": "BIANCA SANTOS IERVOLINO, ANTÔNIO GABRIEL BRITO PEREIRA, MYLENA MENDES CORRÊA, ELOÍSA ROCHA COSTA, VANESSA PAULINO DA CRUZ VIEIRA",
        "link_pdf": "2congresso_vet/1.pdf",
        "evento_id": 4
    },
    {
        "id": 137,
        "titulo": "AVALIAÇÃO DO DESEMPENHO PRODUTIVO ENTRE DIFERENTES PROPORÇÕES GENÉTICAS DE VACAS LEITEIRAS EM REGIÃO SEMIÁRIDA",
        "autores": "Heitor Amaral Figueira, Ana Luisa Gomide Doehler, Ana Flavia da Fonseca, Sérgio Fernandes Ferreira, Suzi Cristina dos Santos Guimarães Martins",
        "link_pdf": "2congresso_vet/2.pdf",
        "evento_id": 4
    },
    {
        "id": 138,
        "titulo": "AVALIAÇÃO DO DESEMPENHO REPRODUTIVO ENTRE VACAS LEITEIRAS DE DIFERENTES PROPORÇÕES GENÉTICAS EM REGIÃO SEMIÁRIDA",
        "autores": "Ana Luisa Gomide Doehler algd, Heitor Amaral Figueira, Nágila Alves Nascimento, Susi Cristina dos Santos Guimarães Martins, Sérgio Fernandes Ferreira",
        "link_pdf": "2congresso_vet/3.pdf",
        "evento_id": 4
    },
    {
        "id": 140,
        "titulo": "AVALIAÇÃO DO ESCORE DE CONDIÇÃO CORPORAL DE NOVILHAS DE CORTE SUPLEMENTADAS A PASTO NO PERÍODO TRANSIÇÃO DAS ÁGUA/ SECA",
        "autores": "Fayra Ferraz Machado de Andrade, Susi Cristina dos Santos Guimarães Martins, Sérgio Fernandes Ferreira, Aylla Lopes Magalhães, Henrique Oliveira Almeida",
        "link_pdf": "2congresso_vet/5.pdf",
        "evento_id": 4
    },
    {
        "id": 141,
        "titulo": "AVALIAÇÃO DO GANHO DE PESO DE NOVILHAS DE CORTE SUPLEMENTADAS A PASTO NO NORTE DE MINAS",
        "autores": "Antônio Eustáquio Filho, EDMARCOS FERREIRA ANDRADE, Wagner Azis Garcia de Araujo, Luan da Silva Luz",
        "link_pdf": "2congresso_vet/6.pdf",
        "evento_id": 4
    },
    {
        "id": 142,
        "titulo": "AVALIAÇÃO IN VITRO DA EFICÁCIA DE ACARICIDAS SOBRE RHIPICEPHALUS (BOOPHILUS) MICROPLUS (CANESTRINI, 1887) (ACARI: IXODIDAE) DE BOVINOS LEITEIROS EM MUNICÍPIOS DE MINAS GERAIS",
        "autores": "Lara Botelho Lacerda, Amanda Danieletto de Mello, Rhuan Paulo Veloso Ribeiro, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/7.pdf",
        "evento_id": 4
    },
    {
        "id": 48,
        "titulo": "ANÁLISE IN SILICO DE INIBIÇÃO DE BIOFILMES DE STAPHYLOCOCCUS AUREUS POR COMPOSTOS NATURAIS: PERSPECTIVAS PARA O MANEJO DA MASTITE BOVINA",
        "autores": "Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Suze Adriane Fonseca, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/4.pdf",
        "evento_id": 2
    },
    {
        "id": 49,
        "titulo": "ANÁLISE IN SILICO DE TANASES BACTERIANAS COMO ESTRATÉGIA PARA MELHORA DA QUALIDADE NUTRICIONAL DE SILAGENS COM ALTO TEOR DE TANINOS",
        "autores": "Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Suze Adriane Fonseca, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/5.pdf",
        "evento_id": 2
    },
    {
        "id": 50,
        "titulo": "AVALIAÇÃO DA PRODUTIVIDADE E DO TEOR DE MATÉRIA SECA DE CULTIVARES DO GÊNERO BRACHIARIA SOB IRRIGAÇÃO NO PERÍODO SECO",
        "autores": "Samuel Dias Silva Souto, Yzak Jonatah Neres Cardoso, Heros Pereira Quaresma, Taison Souto Silva, Paulo Eduardo Ferreira dos Santos, Joan Brálio Mendes Pereira Lima",
        "link_pdf": "3simposio_vet/6.pdf",
        "evento_id": 2
    },
    {
        "id": 51,
        "titulo": "AVALIAÇÃO DO CONSUMO DE SUPLEMENTO PROTÉICO EM BOVINOS MANTIDOS A PASTO.",
        "autores": "Samuel Rodrigues dos Santos, Rogério Mendes Murta, Edmilson Tadeu Cassani, Flávio Da Cruz Silva, Dielle Cawane Lopes Gonçalves, Gabryella Rocha Gusmão",
        "link_pdf": "3simposio_vet/7.pdf",
        "evento_id": 2
    },
    {
        "id": 52,
        "titulo": "BIOINFORMÁTICA NA INTERAÇÃO ENTRE IMUNIDADE E PAPILOMATOSE BOVINA",
        "autores": "Maria Julia Ribeiro, Maria Vitória Loiola Carvalho, Eliane Macedo Sobrinho Santos, Hércules Otacílio Santos, Janini Tatiane Lima Souza Maia, Anna Christina de Almeida",
        "link_pdf": "3simposio_vet/8.pdf",
        "evento_id": 2
    },
    {
        "id": 53,
        "titulo": "COMPETÊNCIAS INTERPESSOAIS E TECNOLÓGICAS EM EQUIPES DE REVENDAS E DISTRIBUIDORAS DE INSUMOS AGRÍCOLAS",
        "autores": "Hélio Pinheiro da Silva Junior, Jarbas de Menezes, Paulo Eduardo Ferreira dos Santos, Perecles Brito Batista, Antônio Eustáquio Filho, Marielly Maria Almeida Moura",
        "link_pdf": "3simposio_vet/9.pdf",
        "evento_id": 2
    },
    {
        "id": 54,
        "titulo": "COMPORTAMENTO INGESTIVO DE NOVILHOS TERMINADOS EM CONFINAMENTO",
        "autores": "Ketley Lavinni Silva Gusmão, Rogério Mendes Murta, Edmilson Tadeu Cassani, Anderson Torres de Melo, Samuel Rodrigues Dos Santos, Flávio Da Cruz Silva",
        "link_pdf": "3simposio_vet/10.pdf",
        "evento_id": 2
    },
    {
        "id": 89,
        "titulo": "UM ESTUDO DESCRITIVO SOBRE A PERCEPÇÃO PROFISSIONAL QUANTO AO USO DE DIETAS NATURAIS NA CLÍNICA DE PEQUENOS ANIMAIS",
        "autores": "Marielly Maria Almeida moura, Silene Maria Prates Barreto, Esther Mariely Vieira, Victória Soares Lopes, Otaviano de Souza Pires Neto, JULIANO SANTOS SIQUEIRA, RENÊ FERREIRA COSTA",
        "link_pdf": "3simposio_vet/45.pdf",
        "evento_id": 2
    },
    {
        "id": 123,
        "titulo": "O USO DE JOGOS NO ENSINO DE MICROBIOLOGIA",
        "autores": "Mateus Fernandes Rodrigues, Sandy Gabrielly Gomes Barbosa, Johnn Oliveira Santos, Mateus Ferreira Santos Silva, Roberta Magalhães Dias Cardozo",
        "link_pdf": "snct2/34.pdf",
        "evento_id": 3
    },
    {
        "id": 124,
        "titulo": "PERCEPÇÃO SOBRE A SEGURANÇA PÚBLICA NO MUNICÍPIO DE TAIOBEIRAS-MG",
        "autores": "Dayane Ferreira Moreira, Anisia da Cruz Dias, Tamirys Costa Santos, Daniel de Jesus Gomes Melo, Clemência Cristina Camillozzis",
        "link_pdf": "snct2/35.pdf",
        "evento_id": 3
    },
    {
        "id": 116,
        "titulo": "MATEMÁTICA EM MOVIMENTO: RELATO DE UMA EXPERIÊNCIA COM O LABORATÓRIO AMBULANTE DE ENSINO DE MATEMÁTICA",
        "autores": "Lidiane Neri Pereira, Andrey Stevan Alves santos, Hjuana Vitória Campos Bárbara, Ranielly Luiz dos Santos, Leonardo Martins do Nascimento",
        "link_pdf": "snct2/27.pdf",
        "evento_id": 3
    },
    {
        "id": 117,
        "titulo": "MATERIAL DIDÁTICO PARA O ENSINO DE PORCENTAGEM: RELATO DE UMA EXPERIÊNCIA EDUCATIVA NA ESCOLA ESTADUAL CORONEL IDALINO RIBEIRO",
        "autores": "Thais de Souza Vieira tsv3, Catiany Aparecida Pereira Viana capv, Tharik Rian Guedes Rocha trgr, Lucas Diego Antunes Barbosa lucas.barbosa, Leonardo Martins do Nascimento leonardo.nascimento",
        "link_pdf": "snct2/28.pdf",
        "evento_id": 3
    },
    {
        "id": 118,
        "titulo": "MERCADO DE TRABALHO NA PERCEPÇÃO DOS EMPREGADORES DE TAIOBEIRAS-MG",
        "autores": "Mayara de Oliveira Sobrinho, Géssica Farias Santos, Rayane Barbosa Lima, Marcos Vinicius Silva Rodrigues, Clemência Cristina Camillozzi",
        "link_pdf": "snct2/29.pdf",
        "evento_id": 3
    },
    {
        "id": 119,
        "titulo": "MERCADO DE TRABALHO NA PERCEPÇÃO DOS TRABALHADORES DE TAIOBEIRAS-MG",
        "autores": "Ian Victor Nogueira, Andressa Lima de Jesus, Gabriela Lima de Jesus, Jully Jêssika Santana, Clemência Cristina Camillozzi",
        "link_pdf": "snct2/30.pdf",
        "evento_id": 3
    },
    {
        "id": 120,
        "titulo": "NARRATIVA DE EXTENSÃO: MINI HOSPITAL VETERINÁRIO - A LUDICIDADE NA TRANSMISSÃO DE CONCEITOS SOBRE CUIDADOS COM ANIMAIS E PROMOÇÃO DA SAÚDE PÚBLICA",
        "autores": "Lara Botelho Lacerda, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "snct2/31.pdf",
        "evento_id": 3
    },
    {
        "id": 121,
        "titulo": "O GOLPE CIVIL-MILITAR E SUAS REVERBERAÇÕES: UM ESTUDO SOBRE A CIDADE DE MEDINA-MG",
        "autores": "JOSE CARLOS GOMES DE CAMPOS, RIAN FRITAS MOREIRA, RUAN FREITAS MOREIRAS, LARISSA ATAIDE DE ARAUJO, ANA CLARA DIAS MARTINS",
        "link_pdf": "snct2/32.pdf",
        "evento_id": 3
    },
    {
        "id": 122,
        "titulo": "O PNAE E A LUTA CONTRA A FOME: ESTUDO DE CASO NO MUNICÍPIO DE SALINAS, MG",
        "autores": "Claudineide Maria dos Santos, Luciana Canário Mendes",
        "link_pdf": "snct2/33.pdf",
        "evento_id": 3
    },
    {
        "id": 93,
        "titulo": "ANÁLISES MICROBIOLÓGICAS DE VEGETAIS DESIDRATADOS EM PROTÓTIPOS DE SECADOR SOLAR E ELÉTRICO",
        "autores": "Luana Conegundes Soares, Laila Cristina Augusta de Souza, Mateus Dias Martins, Roberta Magalhães Dias Cardozo, Felipe Cimino Duarte",
        "link_pdf": "snct2/4.pdf",
        "evento_id": 3
    },
    {
        "id": 94,
        "titulo": "APLICAÇÃO DA MODELAGEM 3D NA PRODUÇÃO DE MUFLAS PARA PRÓTESES BUCOMAXILARES EM PACIENTES COM CÂNCER",
        "autores": "Laise Souza Guimarães, Fernanda Celestino Silva",
        "link_pdf": "snct2/5.pdf",
        "evento_id": 3
    },
    {
        "id": 55,
        "titulo": "CONHECIMENTO TÁCITO DE EQUIPES DE VENDAS NA EFICIENCIA COMERCIAL NO AGRONEGÓCIO",
        "autores": "Liliane Duarte da Silva, Paulo Eduardo Ferreira dos Santos, Jarbas de Menezes, Perecles Brito Batista, Antônio Eustáquio Filho",
        "link_pdf": "3simposio_vet/11.pdf",
        "evento_id": 2
    },
    {
        "id": 56,
        "titulo": "CONSUMO DE PASTAGEM DE NOVILHOS NELORES SUPLEMENTADOS COM PROTEINADO ENERGÉTICO",
        "autores": "Germano Santos Ferreira Júnior gsfj, Rogério Mendes Murta, Edmilson Tadeu Cassani, Matheus Ribeiro Paraíso, Maria de Fátima Batista Freitas, Dielle Cawane Lopes Gonçalves",
        "link_pdf": "3simposio_vet/12.pdf",
        "evento_id": 2
    },
    {
        "id": 57,
        "titulo": "CONVERSÃO ALIMENTAR DE VACAS LEITEIRAS ALIMENTADAS COM FARELO DE PALMA FORRAGEIRA",
        "autores": "Gabriela Morais Durães, Davi Custódio de Souza, Luiz Carlos Gomes de Azevedo, Luiz Rodolfo Antunes Quaresma, Wagner Azis Garcia de Araújo, Antônio Eustáquio Filho",
        "link_pdf": "3simposio_vet/13.pdf",
        "evento_id": 2
    },
    {
        "id": 58,
        "titulo": "DESEMPENHO AGRONÔMICO DE GENÓTIPOS DE SORGO FORRAGEIRO CULTIVADOS EM TRÊS REGIÕES BRASILEIRAS",
        "autores": "Marielly Maria Almeida moura, ANNE KAROLINE FERREIRA MENDES, OTAVIANO DE SOUZA PIRES NETO, JAINE APARECIDA DOS SANTOS, DANIEL ANANIAS DE ASSIS PIRES, JULIANO SANTOS SIQUEIRA",
        "link_pdf": "3simposio_vet/14.pdf",
        "evento_id": 2
    },
    {
        "id": 59,
        "titulo": "DESEMPENHO ANTIPARASITÁRIO DA IVERMECTINA 2% ORAL EM EQUÍDEOS: RESULTADOS DE UM ESTUDO EM CONDIÇÕES DE CAMPO",
        "autores": "Antônio Gabriel Brito Pereira, Mylena Mendes Correa, Kellen Pereira da Silva, Heitor Amaral Figueira, Leonardo Costa Tavares Coelho, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "3simposio_vet/15.pdf",
        "evento_id": 2
    },
    {
        "id": 60,
        "titulo": "DESEMPENHO DE 19 GENÓTIPOS DE SORGO EM DIFERENTES CENÁRIOS EDAFOCLIMÁTICOS QUANTO AO FLORESCIMENTO E À ALTURA DE PLANTA",
        "autores": "Marielly Maria Almeida moura, JAINE APARECIDA DOS SANTOS, OTAVIANO DE SOUZA PIRES NETO, ANNE KAROLINE FERNANDES MENDES, DANIEL ANANIAS DE ASSIS PIRES, RENÊ FERREIRA COSTA",
        "link_pdf": "3simposio_vet/16.pdf",
        "evento_id": 2
    },
    {
        "id": 61,
        "titulo": "DESEMPENHO DE BOVINOS NELORE NA TERMINAÇÃO INTENSIVA A PASTO",
        "autores": "Mateus Bandeira Lima, Rogério Mendes Murta, Edmilson Tadeu Cassani, Rogério Ribeiro da Silva Júnior, Anderson Torres de Melo, Matheus Ribeiro Paraíso",
        "link_pdf": "3simposio_vet/17.pdf",
        "evento_id": 2
    },
    {
        "id": 62,
        "titulo": "DESEMPENHO DE BOVINOS SUPLEMENTADOS A PASTO E TERMINADOS EM CONFINAMENTO",
        "autores": "Luyara Lorrany Alves Lima, Rogério Mendes Murta, Edmilson Tadeu Cassani, Maria de Fátima Batista Freitas, Germano Santos Ferreira Junior, Mateus Bandeira Lima",
        "link_pdf": "3simposio_vet/18.pdf",
        "evento_id": 2
    },
    {
        "id": 63,
        "titulo": "DESEMPENHO DE NOVILHOS ANELORADOS SUPLEMENTADOS COM PROTEINADO NO PERÍODO DE TRANSIÇÃO ÁGUAS-SECAS",
        "autores": "Flávio da Cruz Silva fcs9",
        "link_pdf": "3simposio_vet/19.pdf",
        "evento_id": 2
    },
    {
        "id": 64,
        "titulo": "DESEMPENHO DE NOVILHOS EM RECRIA SUPLEMENTADOS DURANTE O PERÍODO SECO.",
        "autores": "Maria de Fátima Batista Freitas, Rogério Mendes Murta, Edmilson Tadeu Cassani, Ketley Lavinni Silva Gusmão, Anna Karoliny Neves Lisboa, Junior Allef de Oliveira Alves",
        "link_pdf": "3simposio_vet/20.pdf",
        "evento_id": 2
    },
    {
        "id": 66,
        "titulo": "DESEMPENHO DE PROFISSIONAIS DE VENDAS NO SETOR DE INSUMOS AGRÍCOLAS: UMA ANÁLISE A PARTIR DE COMPETÊNCIAS E HABILIDADES",
        "autores": "Jéssica Chaves Rodrigues, Jarbas de Menezes, Paulo Eduardo Ferreira dos Santos, Perecles Brito Batista, Antônio Eustáquio Filho",
        "link_pdf": "3simposio_vet/22.pdf",
        "evento_id": 2
    },
    {
        "id": 67,
        "titulo": "DETECÇÃO FENOTÍPICA DE BETA-LACTAMASES DE ESPECTRO ESTENDIDO EM CEPAS DE ESCHERICHIA COLI ISOLADAS DE BEZERROS DIARRÉICOS",
        "autores": "Suze Adriane Fonseca, Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Ageu Emerson Braz do Carmo, Eduardo Robson Duarte, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/23.pdf",
        "evento_id": 2
    },
    {
        "id": 68,
        "titulo": "EFEITO DE BIOFERTILIZANTES NO DESEMPENHO DO MILHETO FORRAGEIRO NAS CONDIÇÕES EDAFOCLIMÁTICAS DE ARAÇUAÍ, MINAS GERAIS",
        "autores": "Pedro Lucas Batista Pereira Almeida, Alana Saúde Pereira, Tatiana Tozzi Martins Souza Rodrigues, Allieksiei Castelar Perim Souza Rodrigues, Hércules Otacílio Santos, Eliane Macedo Sobrinho Santos",
        "link_pdf": "3simposio_vet/24.pdf",
        "evento_id": 2
    },
    {
        "id": 69,
        "titulo": "ESTUDO COMPARATIVO DE ÍNDICES REPRODUTIVOS DE VACAS LEITEIRAS EM DOIS SISTEMAS DE PRODUÇÃO",
        "autores": "Marielly Maria Almeida moura, JAINE APARECIDA DOS SANTOS, OTAVIANO DE SOUZA PIRES NETOS, ANNE KAROLINE FERNANDES MENDES, DANIEL ANANIAS DE ASSIS PIRES, JULIANO SANTOS SIQUEIRA",
        "link_pdf": "3simposio_vet/25.pdf",
        "evento_id": 2
    },
    {
        "id": 70,
        "titulo": "FENÓTIPO MLSB EM STAPHYLOCOCCUS NÃO-AUREUS ISOLADOS EM LEITE DE VACAS COM MASTITE SUBCLÍNICA",
        "autores": "Agueda Maria de França Tavares, Leonardo Ferreira Oliveira, Marcos Jean Ramos Amorim, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/26.pdf",
        "evento_id": 2
    },
    {
        "id": 71,
        "titulo": "IMPACTO DA ADIÇÃO DE MEL E DO TEMPO DE FERMENTAÇÃO NO TEOR ALCOÓLICO DE CERVEJAS",
        "autores": "Jean Pereira Coutinho, Leila Gonçalves Guimarães Coutinho, Elaine Pereira Coutinho, Ricardo Santos Pereira da Rocha, Felipe Cimino Duarte, Roberta Magalhães Dias Cardozo",
        "link_pdf": "3simposio_vet/27.pdf",
        "evento_id": 2
    },
    {
        "id": 72,
        "titulo": "IMPACTO DAS BOAS PRÁTICAS DE ORDENHA NA CONTAGEM DE CÉLULAS SOMÁTICAS DO LEITE USADO NA PRODUÇÃO DE QUEIJO COZIDO NO VALE DO JEQUITINHONHA E NORTE DE MINAS",
        "autores": "Paula Cristina Vieira Dutra, Lara Botelho Lacerda, Ana Flávia da Fonseca, Rafael da Silva Santos, Thiago Moreira dos Santos",
        "link_pdf": "3simposio_vet/28.pdf",
        "evento_id": 2
    },
    {
        "id": 73,
        "titulo": "IMPACTO DO TEMPO DE EXPERIÊNCIA EM VENDAS NO DESEMPENHO DE EQUIPES COMERCIAIS DO SETOR DE INSUMOS AGROPECUÁRIOS",
        "autores": "Liliane Duarte da Silva, Paulo Eduardo Ferreira dos Santos, Jarbas de Menezes, Perecles Brito Batista, Antônio Eustáquio Filho",
        "link_pdf": "3simposio_vet/29.pdf",
        "evento_id": 2
    },
    {
        "id": 2,
        "titulo": "A GLOBALIZAÇÃO E SEUS IMPACTOS NA EDUCAÇÃO PROFISSIONAL E NA FORMAÇÃO DE PROFESSORES",
        "autores": "Eliesio Lucas Souza Santos, João Paulo Costa Ribeiro",
        "link_pdf": "snct3/2.pdf",
        "evento_id": 1
    },
    {
        "id": 3,
        "titulo": "A PALAVRA ESCAPOU!: UMA EXPERIÊNCIA DO PIBID COM O ENSINO DA ORTOGRAFIA",
        "autores": "Maria Luiza da Silva Santos mlss5, Admilson Eustaquio Prates, Messias Francisco Sobrinho",
        "link_pdf": "snct3/3.pdf",
        "evento_id": 1
    },
    {
        "id": 4,
        "titulo": "A UTILIZAÇÃO DE MATERIAIS MANIPULATIVOS NA INTRODUÇÃO DO TEOREMA DE PITÁGORAS: UM RELATO DE EXPERIÊNCIA",
        "autores": "MARIA DAS GRAÇAS TEIXEIRA DE SOUZA E ROCHA, Daiane de Oliveira Santos, Alik Dione Luiz dos Santos, Lucas Diego Antunes Barbosa, Flávia Alves Pereira",
        "link_pdf": "snct3/4.pdf",
        "evento_id": 1
    },
    {
        "id": 7,
        "titulo": "CUIDADO, TRYPANOSOMA CRUZI NA FEIRA",
        "autores": "Sileimar Maria Lelis, Diogo Henrique Pereira de Oliveira, Maria Tereza Veríssimo de Oliveira e Medeiros, Débora Tais Alves Rodrigues, Karina de Souza Pereira",
        "link_pdf": "snct3/7.pdf",
        "evento_id": 1
    },
    {
        "id": 8,
        "titulo": "CULTIVANDO AS SEMENTES DO SABER",
        "autores": "Ana Julia Ferreira de Oliveira, Villiar Alves Camargo, Lilian Gleisia Alves Dos Santos, Sônia de Fátima Soares da Silva Cardoso",
        "link_pdf": "snct3/8.pdf",
        "evento_id": 1
    },
    {
        "id": 9,
        "titulo": "CULTURA, DANÇA E ALFABETIZAÇÃO: PROJETO INTEGRADO SERTÃO E FOLCLORE EM PRÁTICAS",
        "autores": "Mariana Sacha Nogueira Silva, Leonardo Rodrigues Silva, Jaciely Soares da Silva",
        "link_pdf": "snct3/9.pdf",
        "evento_id": 1
    },
    {
        "id": 10,
        "titulo": "DESAFIOS E POSSIBILIDADES NA INCLUSÃO DE CRIANÇAS COM AUTISMO NA EDUCAÇÃO INFANTIL: UM OLHAR DA DOCÊNCIA",
        "autores": "Mônica Serafim de Paula, Giuliana de Sá Ferreira Barros",
        "link_pdf": "snct3/10.pdf",
        "evento_id": 1
    },
    {
        "id": 11,
        "titulo": "DISTRIBUIÇÃO ESPACIAL DO PARÂMETRO CURVE NUMBER (CN) EM FUNÇÃO DE DIFERENTES CONFIGURAÇÕES DE SOLO, RELEVO E USO/COBERTURA DA TERRA NA BACIA EXPERIMENTAL DO RIBEIRÃO ALMÊCEGAS – NOVORIZONTE/MG",
        "autores": "Lucas Alves Ramos, Patriky Santos de Araújo, Marcelo Rossi Vicente, Ronaldo Medeiros dos Santos",
        "link_pdf": "snct3/11.pdf",
        "evento_id": 1
    },
    {
        "id": 12,
        "titulo": "EDUCAÇÃO AMBIENTAL NA ESCOLA: UM OLHAR A PARTIR DA PRÁTICA DOCENTE",
        "autores": "Gabrielly Assis Batista",
        "link_pdf": "snct3/12.pdf",
        "evento_id": 1
    },
    {
        "id": 13,
        "titulo": "EDUCAÇÃO AMBIENTAL NA PRÁTICA PEDAGÓGICA",
        "autores": "Ana Maria Ferreira Santos amfs2, Mateus Fernandes Rodrigues, Edna Guiomar Salgado",
        "link_pdf": "snct3/13.pdf",
        "evento_id": 1
    },
    {
        "id": 14,
        "titulo": "EDUCAÇÃO AMBIENTAL NO CURRÍCULO ESCOLAR: PRÁTICAS DE PROFESSORES(AS) DE UMA ESCOLA PÚBLICA DE SALINAS/MG",
        "autores": "Flávia Rocha de Jesus, Érica Rosa de Oliveira, Edna Guiomar Salgado Oliveira",
        "link_pdf": "snct3/14.pdf",
        "evento_id": 1
    },
    {
        "id": 15,
        "titulo": "EDUCAÇÃO AMBIENTAL: COMO OS PROFESSORES ESTÃO TRABALHANDO O TEMA EM SALA DE AULA?",
        "autores": "Pedro Henrique Pereira da Penha, Mônica dos Santos Alves, Edna Guiomar Salgado Oliveira",
        "link_pdf": "snct3/15.pdf",
        "evento_id": 1
    },
    {
        "id": 16,
        "titulo": "EDUCAÇÃO DE TODOS E PARA TODOS: CURRICULARIZAÇÃO DA EXTENSÃO E INCLUSÃO EDUCACIONAL",
        "autores": "Vanessa Nery Dantas Cunha, Giuliana de Sá Ferreira Barros",
        "link_pdf": "snct3/16.pdf",
        "evento_id": 1
    },
    {
        "id": 17,
        "titulo": "EFEITO DA GRANULOMETRIA E PROPORÇÃO DA CASCA DO CAFÉ NA COMPOSIÇÃO DE SUBSTRATOS PARA A PRODUÇÃO DE MUDAS DE PELTOPHORUM DUBIUM (SPRENGEL) TAUBERT",
        "autores": "Marília Dutra Massad, Tiago Ribeiro da Rocha, Luana da Silva Rocha, Thalysson Roberto Rocha Pereira, Tiago Reis Dutra",
        "link_pdf": "snct3/17.pdf",
        "evento_id": 1
    },
    {
        "id": 18,
        "titulo": "ENTRE O LABORATÓRIO E O BEBEDOURO: AVALIAÇÃO DA QUALIDADE DA ÁGUA NO IFNMG – SALINAS",
        "autores": "Gláucia da Conceição Santos Ventura, João Paulo Costa Ribeiro, Magnovaldo Carvalho Lopes",
        "link_pdf": "snct3/18.pdf",
        "evento_id": 1
    },
    {
        "id": 19,
        "titulo": "EXPERIÊNCIAS DO PIBID: JOGOS PEDAGÓGICOS",
        "autores": "Vívian Pinheiro Santos, Shirlane Pereira dos Santos, Jaciely Soares da Silva",
        "link_pdf": "snct3/19.pdf",
        "evento_id": 1
    },
    {
        "id": 20,
        "titulo": "FORMAÇÃO CONTINUADA DE PROFESSORES DE MATEMÁTICA: UM PROJETO DE EXTENSÃO NO MUNICÍPIO DE SALINAS",
        "autores": "Catiany Aparecida Pereira Viana, Thais de Souza Vieira, Lidiane Neri Pereira, Hjuana Vitória Campos Bárbara, Maria Eva Freire de Alkimim",
        "link_pdf": "snct3/20.pdf",
        "evento_id": 1
    },
    {
        "id": 21,
        "titulo": "HIV NA FEIRA: MITOS E VERDADES",
        "autores": "Sileimar Maria Lelis, Gabriela Mendes Sousa, Diulhia Clara de Oliveira Ramos Cardoso, Andresa Pereira Sousa, Antônio Paulo Paulino da Silva",
        "link_pdf": "snct3/21.pdf",
        "evento_id": 1
    },
    {
        "id": 24,
        "titulo": "JOVENS MINEIROS SUSTENTÁVEIS: EDUCAÇÃO AMBIENTAL E PROTAGONISMO INFANTIL NA ESCOLA MUNICIPAL DR. WALTER FERREIRA DE ARAÚJO",
        "autores": "Crislane Jardim, Giuliana de Sá Ferreira Barros",
        "link_pdf": "snct3/24.pdf",
        "evento_id": 1
    },
    {
        "id": 25,
        "titulo": "LABORATÓRIO DE PRÁTICAS PEDAGÓGICAS : APRENDIZAGEM ATIVA E NOVOS ARRANJOS PEDAGÓGICOS",
        "autores": "Giuliana de Sa Ferreira Barros",
        "link_pdf": "snct3/25.pdf",
        "evento_id": 1
    },
    {
        "id": 26,
        "titulo": "LER PARA APRENDER: CONSTRUINDO O HÁBITO DA LEITURA UMA EXPERIÊNCIA DO PIBID",
        "autores": "Maria Daniela da Silva Reis mdsr6, Admilson Eustáquio Prates, Messias Francisco Sobrinho",
        "link_pdf": "snct3/26.pdf",
        "evento_id": 1
    },
    {
        "id": 27,
        "titulo": "NEUROCIÊNCIA E EDUCAÇÃO: VIVÊNCIAS E CONTRIBUIÇÕES PARA A ALFABETIZAÇÃO",
        "autores": "Aline Lima, Giuliana de Sá Ferreira Barros",
        "link_pdf": "snct3/27.pdf",
        "evento_id": 1
    },
    {
        "id": 28,
        "titulo": "PALAVRAS QUE CUIDAM: A MEDIAÇÃO AFETUOSA DA LITERATURA NA PEDIATRIA HOSPITALAR",
        "autores": "Débora Messias da Silva dmds7, Gabriela Lopes dos Santos, Jaciely Soares da Silva, Rute Alves Teixeira, Yanara Santos Torres, Waneza Maria de Jesus Souza, Lidiane Rodrigues Brito",
        "link_pdf": "snct3/28.pdf",
        "evento_id": 1
    },
    {
        "id": 29,
        "titulo": "PARÂMETROS MORFOLÓGICOS DE MUDAS DE MORINGA SOB DIFERENTES VOLUMES DE TUBETES E SUBSTRATOS",
        "autores": "Paulo César Alves Porto pcap, Marco Antônio Teles de Menezes, Tharcio Ferreira Durães Freire, Marília Dutra Massad, Tiago Reis Dutra",
        "link_pdf": "snct3/29.pdf",
        "evento_id": 1
    },
    {
        "id": 30,
        "titulo": "PIBID E EDUCAÇÃO ANTIRRACISTA: PRÁTICAS NA EDUCAÇÃO INFANTIL",
        "autores": "Joicy Duraes",
        "link_pdf": "snct3/30.pdf",
        "evento_id": 1
    },
    {
        "id": 31,
        "titulo": "PRATICA PEDAGOGICA E EDUCAÇAO AMBIENTAL: REFLEXOES NECESSARIAS",
        "autores": "Luana Ferreira de Jesus",
        "link_pdf": "snct3/31.pdf",
        "evento_id": 1
    },
    {
        "id": 32,
        "titulo": "PRÁTICA PEDAGÓGICA, EDUCAÇÃO AMBIENTAL E INTERDISCIPLINARIDADE :ARTICULAÇOES PARA UMA FORMAÇÃO DE PROFESSORES CRITICA E TRANSFORMADORA",
        "autores": "Renata Alves Dias rad7, Hianca Ferreira Dos Santos, Kelly Suzyanne Teixeira dos Anjos",
        "link_pdf": "snct3/32.pdf",
        "evento_id": 1
    },
    {
        "id": 33,
        "titulo": "PRÁTICAS PEDAGÓGICAS E EDUCAÇÃO AMBIENTAL: UM ESTUDO DE CASO EM UMA ESCOLA PÚBLICA EM SALINAS/MG",
        "autores": "Alexsandra Gomes dos Santos, Adriana Barbosa de Barros, Maria Daniela da Silva Reis, Edna G. Salgado Oliveira",
        "link_pdf": "snct3/33.pdf",
        "evento_id": 1
    },
    {
        "id": 34,
        "titulo": "PRODUÇÃO DE MUDAS DE DELONIX REGIA SOB DIFERENTES VOLUMES DE TUBETES E FORMULAÇÕES DE OSMOCOTE®",
        "autores": "Marília Dutra Massad, Vanessa Batista dos Anjos, João Pedro Moreira, Kauan Moreira Costa, Tiago Reis Dutra",
        "link_pdf": "snct3/34.pdf",
        "evento_id": 1
    },
    {
        "id": 35,
        "titulo": "PRODUÇÃO DE MUDAS DE MORINGA SOB DIFERENTES VOLUMES DE TUBETES E DOSES DE ADUBO DE LIBERAÇÃO LENTA",
        "autores": "Marco Antônio de Menezes, Mariana Santos de Oliveira, Érica Ferreira de Oliveira, Marília Dutra Massad, Tiago Reis Dutra",
        "link_pdf": "snct3/35.pdf",
        "evento_id": 1
    },
    {
        "id": 36,
        "titulo": "PRODUÇÃO DO BIOCHAR A PARTIR DE BIOMASSA DE ESPÉCIES DE BAMBU SP.",
        "autores": "Samuel Clevio Pereira scp6, Wagner Patricio de Sousa Junior, Vinicius Orlandi Barbosa Lima",
        "link_pdf": "snct3/36.pdf",
        "evento_id": 1
    },
    {
        "id": 37,
        "titulo": "PRODUTIVIDADE DE PITAYA HILOCEREUS POLYRHIZUS EM COMPARAÇÃO COM A HILOCEREUS UNDATUS CULTIVADAS EM PROJETO DE PESQUISA NO MUNICÍPIO DE SALINAS, MINAS GERAIS",
        "autores": "Douglas Marinho Silva dms7",
        "link_pdf": "snct3/37.pdf",
        "evento_id": 1
    },
    {
        "id": 38,
        "titulo": "RELATO DE EXPERIÊNCIA NO PIBID: REFLEXÕES SOBRE DESIGUALDADE SOCIAL E FORMAÇÃO DOCENTE",
        "autores": "Mônica dos Santos Alves msa27, Admilson Eustáquio Prates, Maria Aparecida de Jesus Fernandes, Lucy Mary Alves da Silva",
        "link_pdf": "snct3/38.pdf",
        "evento_id": 1
    },
    {
        "id": 39,
        "titulo": "ROBÓTICA EDUCACIONAL E APRENDIZAGEM ATIVA: EXPERIMENTAÇÃO, LUDICIDADE E ENSINO DE ENERGIA MECÂNICA EM ESCOLAS PÚBLICAS DE SALINAS (MG)",
        "autores": "Flávia Rocha de Jesus, Pedro Henrique Pereira da Penha, Jaciely Soares da Silva",
        "link_pdf": "snct3/39.pdf",
        "evento_id": 1
    },
    {
        "id": 40,
        "titulo": "SECAGEM EM CAMADA DE ESPUMA DA POLPA DE MARACUJÁ: AVALIAÇÃO DA CINÉTICA E PARÂMETROS TECNOLÓGICOS DO PRODUTO EM PÓ.",
        "autores": "Marilda Ramos Dias, Renata Rodrigues Saraiva, Celina Ferreira de Oliveira, Karine Gonçalves de Oliveira, Isis Celena Amaral",
        "link_pdf": "snct3/40.pdf",
        "evento_id": 1
    },
    {
        "id": 41,
        "titulo": "SERES VIVOS E NÃO VIVOS NA EDUCAÇÃO INFANTIL: UMA EXPERIÊNCIA NO PIBID",
        "autores": "Mateus Fernandes Rodrigues, Ana Maria Ferreira Santos, Lucy Mary Alves da Silva, Maria Aparecida de Jesus Fernandes, Admilson Eustáquio Prates",
        "link_pdf": "snct3/41.pdf",
        "evento_id": 1
    },
    {
        "id": 42,
        "titulo": "TECNOLOGIA NA PRÁTICA DO APRENDIZADO: RELATO DE EXPERIÊNCIA NO ENSINO FUNDAMENTAL I COM O PIBID",
        "autores": "Érica Rosa de Oliveira, Admilson Eustaquio Prates, Messias Francisco Sobrinho",
        "link_pdf": "snct3/42.pdf",
        "evento_id": 1
    },
    {
        "id": 43,
        "titulo": "USO DE SORO DE QUEIJO NA SUPLEMENTÇÃO DE BOVINOS",
        "autores": "Gustavo Pereira dos Santos Moreira, Susi Cristina dos Santos Guimarães Martins, Sérgio Fernandes Ferreira, Maria Clara Loiola Martins, Samira Ribeiro Dias",
        "link_pdf": "snct3/43.pdf",
        "evento_id": 1
    },
    {
        "id": 44,
        "titulo": "UTILIZAÇÃO DA CASCA DO URUCUM PARA A PRODUÇÃO DE MUDAS DE SIBIPIRUNA SOB DIFERENTES NÍVEIS DE SOMBREAMENTO",
        "autores": "Tharcio Ferreira Durães Freire, Herisson Emanuel Porto da Silva, Vagner dos Santos Freitas, Marília Dutra Massad, Tiago Reis Dutra",
        "link_pdf": "snct3/44.pdf",
        "evento_id": 1
    },
    {
        "id": 45,
        "titulo": "ANÁLISE COMPARATIVA DO PROCESSO DE CRIODESIDRATAÇÃO EM TECIDO CARDÍACO, NEUROLÓGICO E DIGESTÓRIO DE ANIMAIS DOMÉSTICOS DO IFNMG-CAMPUS SALINAS",
        "autores": "Deivid Reis Magalhães, Walter Octaviano Bernis Filho",
        "link_pdf": "3simposio_vet/1.pdf",
        "evento_id": 2
    },
    {
        "id": 76,
        "titulo": "O SABER VETERINÁRIO SOBRE ALIMENTAÇÃO NATURAL CASEIRA PARA CÃES E GATOS",
        "autores": "Marielly Maria Almeida moura, Silene Maria Prates Barreto, Esther Mariely Vieira, Victória Soares Lopes, OTAVIANO DE SOUZA PIRES NETO, JULIANO SANTOS SIQUEIRA, RENÊ FERREIRA COSTA",
        "link_pdf": "3simposio_vet/32.pdf",
        "evento_id": 2
    },
    {
        "id": 77,
        "titulo": "PERCEPÇÃO DOS TUTORES SOBRE CRECHES PET E AVALIAÇÃO DO BEM-ESTAR EM CÃES",
        "autores": "Marielly Maria Almeida moura, LÍVIA MENDES RODRIGUES, Laila Minely Silva Costa, Maria Isabela borges sena, DANIEL ANANIAS DE ASSIS PIRES, Renê Ferreira Costa",
        "link_pdf": "3simposio_vet/33.pdf",
        "evento_id": 2
    },
    {
        "id": 78,
        "titulo": "PERCEPÇÃO DOS TUTORES SOBRE CRECHES PET E AVALIAÇÃO DO BEM-ESTAR EM CÃES",
        "autores": "Marielly Maria Almeida moura, LÍVIA RODRIGUES MENDES, Rômulo Gabriel Pena Simplício, Maria Isabela Borges Sena, DANIEL ANANIAS DE ASSIS PIRES, RENÊ FERREIRA COSTA",
        "link_pdf": "3simposio_vet/34.pdf",
        "evento_id": 2
    },
    {
        "id": 79,
        "titulo": "PÓ DE ROCHA E SOLUÇÃO DE MEL NA GERMINAÇÃO DE SEMENTES DO PANICUM MAXIMUS JACQ. CV. TANZÂNIA",
        "autores": "Alana Saúde Pereira, Pedro Lucas Batista Pereira Almeida, Tatiana Tozzi Martins Souza Rodrigues, Allieksiei Castelar Perim Souza Rodrigues, Hércules Otacílio Santos, Eliane Macedo Sobrinho Santos",
        "link_pdf": "3simposio_vet/35.pdf",
        "evento_id": 2
    },
    {
        "id": 80,
        "titulo": "RENDIMENTO DE CARCAÇA DE NOVILHOS NELORE SUBMETIDOS A DIFERENTES ESTRATÉGIAS NUTRICIONAIS",
        "autores": "Junior Allef de Oliveira Alves, Rogerio Mendes Murta, Edmilson Tadeu Cassani, Ketley Lavinni Silva Gusmão, Germano Santos Ferreira Junior, Mateus Bandeira Lima",
        "link_pdf": "3simposio_vet/36.pdf",
        "evento_id": 2
    },
    {
        "id": 81,
        "titulo": "RESISTÊNCIA À METICILINA EM STAPHYLOCOCCUS NÃO-AUREUS ISOLADOS EM LEITE DE VACAS COM MASTITE SUBCLÍNICA",
        "autores": "Agueda Maria de França Tavares, Leonardo Ferreira Oliveira, Marcos Jean Ramos Amorim, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/37.pdf",
        "evento_id": 2
    },
    {
        "id": 82,
        "titulo": "SELEÇÃO DE EPÍTOPOS VACINAIS CONTRA STAPHYLOCOCCUS AUREUS NA MASTITE BOVINA: UMA ABORDAGEM EM IMUNOINFORMÁTICA",
        "autores": "Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Suze Adriane Fonseca, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/38.pdf",
        "evento_id": 2
    },
    {
        "id": 84,
        "titulo": "SUPLEMENTAÇÃO NA RECRIA DE NOVILHOS NELORE",
        "autores": "Maria de Fátima Batista Freitas, Rogério Mendes Murta, Edmilson Tadeu Cassani, Matheus Ribeiro Paraíso, Gabryella Rocha Gusmão, Samuel Rodrigues Dos Santos",
        "link_pdf": "3simposio_vet/40.pdf",
        "evento_id": 2
    },
    {
        "id": 85,
        "titulo": "TEMPO DE SECAGEM DA PALMA FORRAGEIRA TRITURADA E EXPOSTA AO SOL",
        "autores": "Antônio Eustáquio Filho, Romaro Figueiredo de Aquino, LUIZ RODOLFO ANTUNES QUARESMA, Wagner Azis Garcia de Araujo",
        "link_pdf": "3simposio_vet/41.pdf",
        "evento_id": 2
    },
    {
        "id": 86,
        "titulo": "TEMPO DE SECAGEM DA PALMA FORRAGEIRA TRITURADA EM FUNÇÃO DO NÚMERO DE REVOLVIMENTOS DIÁRIOS",
        "autores": "Denise Soares Dias, Romaro Figueiredo de Aquino, Luiz Rodolfo Antunes Quaresma, Wagner Azis Garcia de Araujo, Fabiano Matos Pereira, Antônio Eustáquio Filho",
        "link_pdf": "3simposio_vet/42.pdf",
        "evento_id": 2
    },
    {
        "id": 87,
        "titulo": "TEOR DE HIDROXIMETILFURFURAL E AÇÚCAR EM DIFERENTES AMOSTRAS DE MEL DE ABELHA APIS MELLIFERA",
        "autores": "Ana Paula Sousa Santos, Alana Saúde Pereira, Bruna Santos Ribeiro, Hércules Otacílio Santos, Wagner Silva dos Santos, Eliane Macedo Sobrinho Santos",
        "link_pdf": "3simposio_vet/43.pdf",
        "evento_id": 2
    },
    {
        "id": 88,
        "titulo": "TERMINAÇÃO INTENSIVA À PASTO DE VACAS NELORE DE DESCARTE",
        "autores": "Matheus Ribeiro Paraiso, Rogério Mendes Murta, Edmilson Tadeu Cassani, Maria de Fátima Batista Freitas, Germano Santos Ferreira Junior, Vitor Jose da Silva",
        "link_pdf": "3simposio_vet/44.pdf",
        "evento_id": 2
    },
    {
        "id": 90,
        "titulo": "A LEI DE COTAS NO ENSINO SUPERIOR: UM ESTUDO DE CASO NO INSTITUTO FEDERAL DO NORTE DE MINAS GERAIS / CAMPUS JANUÁRIA",
        "autores": "Tássia Pereira de Souza tpds16, Vitoria Carvalho Silva, Wanderson Pereira Araújo",
        "link_pdf": "snct2/1.pdf",
        "evento_id": 3
    },
    {
        "id": 91,
        "titulo": "AÇÕES PARA MANTER A QUALIDADE DO LEITE E DERIVADOS PRODUZIDOS NO IFNMG – CAMPUS SALINAS",
        "autores": "Heitor Amaral Figueira, ANA LUISA GOMIDE DOEHLER, ANA FLAVIA DA FONSECA, SUSI CRISTINA DOS SANTOS SOUZA GUIMARAES",
        "link_pdf": "snct2/2.pdf",
        "evento_id": 3
    },
    {
        "id": 92,
        "titulo": "ALTERNATIVAS PARA CONTROLE DE LEUCENA (LEUCAENA LEUCOCEPHALA) EM ÁREAS DE PRESERVAÇÃO PERMANENTE FLUVIAL, NO MUNICÍPIO DE SALINAS-MG",
        "autores": "Thais Amorim de Oliveira, Joyce Carolline da Silva, Alessandro de Paula Silva",
        "link_pdf": "snct2/3.pdf",
        "evento_id": 3
    },
    {
        "id": 46,
        "titulo": "ANÁLISE ECONÔMICA DA PRODUÇÃO LEITEIRA DE VACAS ALIMENTADAS COM FARELO DE PALMA FORRAGEIRA",
        "autores": "Erik Juneo Soares Costa, Davi Custódio de Souza, Luiz Carlos Gomes de Azevedo, Harley Alex Soares, Wagner Azis Garcia de Araujo, Antônio Eustáquio Filho",
        "link_pdf": "3simposio_vet/2.pdf",
        "evento_id": 2
    },
    {
        "id": 139,
        "titulo": "AVALIAÇÃO DO EFEITO DA SUPLEMENTAÇÃO A PASTO DE NOVILHAS DE CORTE NA TAXA DE NASCIMENTO DE BEZERROS",
        "autores": "Antônio Eustáquio Filho, EDMARCOS FERREIRA ANDRADE, Wagner Azis Garcia de Araujo, Lucas D'angeles Mendes",
        "link_pdf": "2congresso_vet/4.pdf",
        "evento_id": 4
    },
    {
        "id": 96,
        "titulo": "ATIVIDADE ANTAGONISTA DE METABÓLITO PRODUZIDO POR BACTÉRIAS ÁCIDO-LÁTICAS ISOLADAS DO REQUEIJÃO MORENO FRENTE A PATÓGENOS ASSOCIADOS A DOENÇAS DE ORIGEM ALIMENTAR",
        "autores": "Sthella Dhamárys Godinho Cardoso sdgc, Graça Pereira de Jesus, Roziane Ferreira Rocha dos Santos, Bruna Castro Porto Mendes Carvalho",
        "link_pdf": "snct2/7.pdf",
        "evento_id": 3
    },
    {
        "id": 100,
        "titulo": "COMPARAÇÃO DO RENDIMENTO DE BATATA-DOCE (IPOMOEA BATATAS) DESIDRATADA EM FORMATOS VARIADOS",
        "autores": "Gustavo Guilherme da Cruz Souza, Giulia Nunes de Almeida, Kate Lorrany Silva Dias, Roberta Magalhães Dias Cardozo, Felipe Cimino Duarte",
        "link_pdf": "snct2/11.pdf",
        "evento_id": 3
    },
    {
        "id": 101,
        "titulo": "CORRELAÇÃO ENTRE PRODUÇÃO E DIFERENTES GRUPOS GENÉTICOS DE VACAS LEITEIRAS EM REGIÃO SEMIÁRIDA",
        "autores": "Heitor Amaral Figueira, ANA LUISA GOMIDE DOHELER, FELIPE FERREIRA LOPES MATOS, SERGIO FERNANDES FERREIRA, SUSI CIRSTINA DOS SANTOS SOUZA GUIMARÃES",
        "link_pdf": "snct2/12.pdf",
        "evento_id": 3
    },
    {
        "id": 102,
        "titulo": "DESENVOLVIMENTO DE PRODUTOS DESIDRATADOS DE BATATA-DOCE COMO ALTERNATIVAS SAUDÁVEIS E ENERGÉTICAS",
        "autores": "Giulia Nunes de Almeida, Gustavo Guilherme da Cruz Souza, Felipe Cimino Duarte, Kate Lorrany Silva Dias, Roberta Magalhães Dias Cardozo",
        "link_pdf": "snct2/13.pdf",
        "evento_id": 3
    },
    {
        "id": 103,
        "titulo": "DESENVOLVIMENTO DE SUPORTES RADIOTRANSPARENTES PARA NIVELAMENTO DE TAMPOS RADIOTERÁPICOS: PROTOTIPAGEM E APLICAÇÃO EM PROCEDIMENTOS DE TOMOGRAFIA",
        "autores": "Fernanda Celestino Silva, Laise Souza Guimaraes",
        "link_pdf": "snct2/14.pdf",
        "evento_id": 3
    },
    {
        "id": 104,
        "titulo": "ECOLOGIA NA PRÁTICA: UMA ABORDAGEM APLICADA A DISCENTES DO PERÍODO NOTURNO DO CURSO DE LICENCIATURA EM CIÊNCIAS BIOLÓGICAS",
        "autores": "Mateus Fernandes Rodrigues, Carolaine Silva Souza, Naiane Alves Jardim, Andreia Dias Silva, Marinalva Martins dos Santos",
        "link_pdf": "snct2/15.pdf",
        "evento_id": 3
    },
    {
        "id": 105,
        "titulo": "EDUCAÇÃO INCLUSIVA E CUMPRIMENTO DA META 4 DO PNE: DESAFIOS E INICIATIVAS NO CONTEXTO MUNICIPAL (2014-2024)",
        "autores": "Nayra Souza Silva, Luciana Canário Mendes",
        "link_pdf": "snct2/16.pdf",
        "evento_id": 3
    },
    {
        "id": 106,
        "titulo": "EDUCAÇÃO POPULAR EM AÇÃO: PRODUÇÃO DE VÍDEO-DOCUMENTÁRIO SOBRE O PROGRAMA CIDADÃO NOTA 10",
        "autores": "Sthéfany Christie Barbosa Santos, Jaciely Soares da Silva, Aline Andrade Silva, Simone Eurides do Amaral, Edna Guiomar Salgado Oliveira",
        "link_pdf": "snct2/17.pdf",
        "evento_id": 3
    },
    {
        "id": 107,
        "titulo": "ENSINO E APRENDIZAGEM EM GENÉTICA: PERSPECTIVAS E DESAFIOS NO ENSINO MÉDIO",
        "autores": "Lara Fernanda Ferreira Guedes, Mateus Fernandes Rodrigues, Érica Alves Bandeira, Guilherme Costa Dias",
        "link_pdf": "snct2/18.pdf",
        "evento_id": 3
    },
    {
        "id": 108,
        "titulo": "ERA UMA VEZ... CONTAÇÃO DE HISTÓRIAS EM AMBIENTE HOSPITALAR",
        "autores": "Lidiane Rodrigues Brito, Daiane Silva de Andrade, Débora Messias da Silva, Gabriela Lopes dos Santos, Jaciely Soares da Silva, Rute Alves Teixeira, Yanara Santos Torres, Waneza Maria de Jesus Souza",
        "link_pdf": "snct2/19.pdf",
        "evento_id": 3
    },
    {
        "id": 109,
        "titulo": "ESTUDO DA CAPACIDADE ACIDIFICANTE DE BACTÉRIAS ÁCIDO-LÁTICAS ISOLADAS DO REQUEIJÃO MORENO",
        "autores": "Graça Pereira de Jesus, Roziane Ferreira Rocha dos Santos, Bruna Castro Porto Mendes Carvalho",
        "link_pdf": "snct2/20.pdf",
        "evento_id": 3
    },
    {
        "id": 110,
        "titulo": "EVASÃO EM CURSO SUPERIOR: UMA ANÁLISE DO CURSO DE LICENCIATURA EM CIÊNCIAS BIOLÓGICAS DO IFNMG – CAMPUS SALINAS",
        "autores": "Érica Alves Bandeira, Mateus Fernades Rodrigues, Lara Fernanda Ferreira Guedes, Marinalva Martins dos Santos",
        "link_pdf": "snct2/21.pdf",
        "evento_id": 3
    },
    {
        "id": 111,
        "titulo": "EXSICATAS COMO RECURSO DIDÁTICO NO ENSINO DE BOTÂNICA NO CONTEXTO DO CERRADO, EM ESCOLA QUILOMBOLA DE NOVA MATRONA, MINAS GERAIS",
        "autores": "Lucas Mendes Afonso Sarmento, Telma Temoteo dos Santos",
        "link_pdf": "snct2/22.pdf",
        "evento_id": 3
    },
    {
        "id": 112,
        "titulo": "IDENTIFICAÇÃO DAS ESPÉCIES FLORESTAIS NAS PRAÇAS PÚBLICAS DO MUNICÍPIO DE SÃO JOÃO DO PARAÍSO-MG",
        "autores": "Marcus Vinicus De Almeida Pereira, Marília Dutra Massad, Tiago Reis Dutra, Luiz Fernando Dias Gomes, Tiago Ribeiro da Rocha",
        "link_pdf": "snct2/23.pdf",
        "evento_id": 3
    },
    {
        "id": 113,
        "titulo": "INDICADORES DE SEGURANÇA PÚBLICA NO MUNICÍPIO DE TAIOBEIRAS-MG",
        "autores": "Danila dos Santos, Marta Ferreira Moreira, Leiliane de Souza Texeira, Clemência Cristina Camillozzi",
        "link_pdf": "snct2/24.pdf",
        "evento_id": 3
    },
    {
        "id": 114,
        "titulo": "INOVAÇÃO EM TREINAMENTO EMPRESARIAL: PROTÓTIPO FÍSICO EM MDF PARA FACILITAR O ENSINO DE GESTÃO E EMPREENDEDORISMO",
        "autores": "Fernanda Celestino Silva, Laise Souza Guimaraes",
        "link_pdf": "snct2/25.pdf",
        "evento_id": 3
    },
    {
        "id": 115,
        "titulo": "LABORATÓRIO AMBULANTE DE MATEMÁTICA: RELATO DO PROJETO DE ENSINO REALIZADO NO CAMPUS SALINAS",
        "autores": "Daniela Inácia dos Santos dids2, Leonardo Martins do Nascimento",
        "link_pdf": "snct2/26.pdf",
        "evento_id": 3
    },
    {
        "id": 125,
        "titulo": "POTENCIAL LARVICIDA DE EXTRATOS VEGETAIS NO CONTROLE DO AEDES AEGYPTI",
        "autores": "Mariana Santos de Oliveira, Rudá Mahayana Cordeiro de Barros, Filipe Vieira Santos de Abreu, Patricia Nery Silva Souza",
        "link_pdf": "snct2/36.pdf",
        "evento_id": 3
    },
    {
        "id": 126,
        "titulo": "PRODUÇÃO DE DIACETIL POR BACTÉRIAS ÁCIDO-LÁTICAS PROVENIENTES DO BANCO DE CULTURA DO REQUEIJÃO MORENO",
        "autores": "Roziane Ferreira Rocha Dos Santos, Graça Pereira de Jesus, Bruna Castro Porto Mendes Carvalho",
        "link_pdf": "snct2/37.pdf",
        "evento_id": 3
    },
    {
        "id": 127,
        "titulo": "PROJETO DE ENSINO: JANELAS PARA O BRASIL",
        "autores": "Marcos Vinícius Dias Silva, Mateus Fernandes Rodrigues, Lindha Emanuelly Almeida Santiago, Antônio Marcos Alves Pereira, Rosana de Jesus dos Santos",
        "link_pdf": "snct2/38.pdf",
        "evento_id": 3
    },
    {
        "id": 143,
        "titulo": "CARACTERIZAÇÃO DO PARASITISMO GASTROINTESTINAL EM EQUINOS DA RAÇA QUARTO DE MILHA",
        "autores": "Antônio Gabriel Brito Pereira, João Marcos Ribeiro Braga, Bianca Santos Iervolino, Athos Ricardo Mourão Nogueira, Vanessa Paulino Da Cruz Vieira",
        "link_pdf": "2congresso_vet/8.pdf",
        "evento_id": 4
    },
    {
        "id": 144,
        "titulo": "CONFINAMENTO DE BOVINOS NA DIETA PURO GRÃO",
        "autores": "Brenda Souza Rodrigues bsr9, OTAVIANO DE SOUZA PIRES NETO, DANIEL ANANIAS DE ASSIS PIRES, MARIELLY MARIA ALMEIDA MOURA, OSCAR VIEIRA LAFETÁ NETO",
        "link_pdf": "2congresso_vet/9.pdf",
        "evento_id": 4
    },
    {
        "id": 145,
        "titulo": "CONSUMO DE MATÉRIA SECA E CUSTO-BENEFÍCIO DO USO DE BAGAÇO DE CANA-DE-AÇÚCAR TRATADO EM DIETAS PARA CORDEIROS",
        "autores": "Amanda Araújo Ferreira, Ana Luisa Gomide Doehler, Antônio Eustáquio Filho, Paulo Eduardo Ferreira Dos Santos",
        "link_pdf": "2congresso_vet/10.pdf",
        "evento_id": 4
    },
    {
        "id": 146,
        "titulo": "CORRELAÇÃO ENTRE VACAS LEITEIRAS DE DIFERENTES GRUPOS GENÉTICOS E ÍNDICES REPRODUTIVOS EM REGIÃO SEMIÁRIDA",
        "autores": "Ana Luisa Gomide Doehler algd, João Marcos Ribeiro Braga, Heitor Amaral Figueira, Susi Cristina dos Santos Guimaraes Martins, Sérgio Fernandes Ferreira",
        "link_pdf": "2congresso_vet/11.pdf",
        "evento_id": 4
    },
    {
        "id": 147,
        "titulo": "EFICÁCIA IN VITRO DE ACARICIDAS SOBRE RHIPICEPHALUS MICROPLUS (CANESTRINI, 1888) (ACARI: IXODIDAE)",
        "autores": "Gabriel Augusto Pereira Sousa, Lara Botelho Lacerda, Amanda Danieletto de Mello, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/12.pdf",
        "evento_id": 4
    },
    {
        "id": 148,
        "titulo": "EFICIÊNCIA ALIMENTAR DE VACAS LEITEIRAS ALIMENTADAS COM FARELO DE PALMA",
        "autores": "Davi Custódio de Souza, Luis Carlos Gomes de Azevedo, Antônio Eustáquio Filho, Harley Alex Soares, Wagner Azis Garcia de Araújo",
        "link_pdf": "2congresso_vet/13.pdf",
        "evento_id": 4
    },
    {
        "id": 149,
        "titulo": "FAUNA PARASITÁRIA GASTROENTÉRICA DE EQUINOS DA RAÇA MANGALARGA MARCHADOR",
        "autores": "João Marcos Ribeiro Braga, Antônio Gabriel Brito Pereira, Heitor Amaral Figueira, Mylena Mendes Corrêa, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/14.pdf",
        "evento_id": 4
    },
    {
        "id": 150,
        "titulo": "FREQUÊNCIA DE ZOONOSES EM ANIMAIS ATENDIDOS EM CLÍNICA VETERINÁRIA NO MUNICÍPIO DE ALMENARA-MG",
        "autores": "Eloisa Rocha Costa, Bethânia Silva Gil de Freitas, Bianca Santos Iervolino, Kamila Rodrigues Costa, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/15.pdf",
        "evento_id": 4
    },
    {
        "id": 47,
        "titulo": "ANÁLISE IN SILICO DA INTERAÇÃO ENTRE LACTOFERRINA BOVINA E PROTEÍNAS BACTERIANAS ENVOLVIDAS NA MASTITE BOVINA",
        "autores": "Agueda Maria de França Tavares, Leonardo Ferreira Oliveira, Marcos Jean Ramos Amorim, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "3simposio_vet/3.pdf",
        "evento_id": 2
    },
    {
        "id": 151,
        "titulo": "HELMINTOS E PROTOZOÁRIOS GASTRINTESTINAIS EM BOVINOS DE CORTE ORIUNDOS DE FAZENDA DE RECRIA NO NORTE DE MINAS GERAIS",
        "autores": "Athos Ricardo Mourão Nogueira, Pérola Pereira Batista, Helder Ferreira Ramos, Antônio Gabriel Brito Pereira, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/16.pdf",
        "evento_id": 4
    },
    {
        "id": 152,
        "titulo": "IMPLEMENTAÇÃO DO SISTEMA “COMPOST BARN” COMO ESTRATÉGIA DE MELHORIA DA PRODUTIVIDADE DE LEITE",
        "autores": "Taison Souto Silva, Paulo Eduardo Ferreira Santos, Laura Costa de Almeida, Samuel Dias Silva Souto, Rayanne Clemente Jorge",
        "link_pdf": "2congresso_vet/17.pdf",
        "evento_id": 4
    },
    {
        "id": 153,
        "titulo": "IMPLEMENTAÇÃO DO SISTEMA “COMPOST BARN” COMO ESTRATÉGIA DE MELHORIA DA QUALIDADE DE LEITE",
        "autores": "Jéssica Chaves Rodrigues, Perecles Brito Batista, Ilana Nahas Duarte",
        "link_pdf": "2congresso_vet/18.pdf",
        "evento_id": 4
    },
    {
        "id": 154,
        "titulo": "LEISHMANIOSE VISCERAL CANINA NA REGIÃO PERIURBANA DO MUNICÍPIO DE JANUÁRIA, MINAS GERAIS",
        "autores": "Mylena Mendes Corrêa, Antônio Gabriel Brito Pereira, Bianca Santos Iervolino, João Marcos Ribeiro Braga, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/19.pdf",
        "evento_id": 4
    },
    {
        "id": 155,
        "titulo": "POTENCIAL FORRAGEIRO DOS CAPINS UROCHLOA MOSAMBICENSIS E BUFFEL ÁRIDUS NO SEMIÁRIDO",
        "autores": "Liliane Duarte da Silva, Susi Cristina dos Santos Guimarães Martins, Leonardo Bernardino Tanure Matos, Osmar Correia Primo, Antônio Eustáquio Filho",
        "link_pdf": "2congresso_vet/20.pdf",
        "evento_id": 4
    },
    {
        "id": 156,
        "titulo": "SOROPREVALÊNCIA DE TOXOPLASMA GONDII EM SUÍNOS DESTINADOS AO ABATE NA REGIÃO DE SALINAS, MINAS GERAIS",
        "autores": "Lavínia Caires Queiroga, Brena Lana Neres Barbosa, Isabela Aquino Pereira, Venessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/21.pdf",
        "evento_id": 4
    },
    {
        "id": 157,
        "titulo": "USO DOS CINCO DOMÍNIOS PARA AVALIAR O BEM-ESTAR DE EQUINOS NO MUNICÍPIO DE JUATUBA - MG",
        "autores": "Marielly Maria Almeida Moura, Marielly Maria Almeida Moura, DANIEL ANANIAS DE ASSIS PIRES, CINARA DA CUNHA SIQUEIRA CARVALHO, Lívia rodrigues mendes, Isadora Fernanda Dias Nunes",
        "link_pdf": "2congresso_vet/22.pdf",
        "evento_id": 4
    },
    {
        "id": 158,
        "titulo": "UTILIZAÇÃO DO BIOCARRAPATICIDOGRAMA PARA AVALIAÇÃO IN VITRO DA RESISTÊNCIA E SUSCETIBILIDADE DE RHIPICEPHALUS MICROPLUS A ACARICIDAS COMERCIAIS",
        "autores": "Lara Botelho Lacerda, Amanda Danieletto de Mello, Rhuan Paulo Veloso Ribeiro, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "2congresso_vet/23.pdf",
        "evento_id": 4
    },
    {
        "id": 128,
        "titulo": "QUANTIFICAÇÃO E IDENTIFICAÇÃO FENOTÍPICA DA MICROBIOTA LÁTICA ISOLADA NA PRODUÇÃO DO REQUEIJÃO MORENO",
        "autores": "Graça Pereira de Jesus, Débora Gabriele de Araújo Gomes, Hélvio Monteiro de Oliveira, Nicole Eduarda Rosa Oliveira, Bruna Castro Porto Mendes Carvalho",
        "link_pdf": "snct2/39.pdf",
        "evento_id": 3
    },
    {
        "id": 129,
        "titulo": "RELAÇÃO CERNE ALBURNO E DENSIDADE BÁSICA DA MADEIRA DE TACHIGALI SUBVELUTINA (BENTH.) OLIVEIRA-FILHO",
        "autores": "Wagner Patricio de Sousa Junior, Breno de Souza de Jesus, José Paulo da Rocha, Jonas Alex Antonio de Sousa, Samuel Clevio Pereira",
        "link_pdf": "snct2/40.pdf",
        "evento_id": 3
    },
    {
        "id": 130,
        "titulo": "RELATO DE EXPERIÊNCIA: A IMPORTÂNCIA DAS VIAGENS TÉCNICAS NA FORMAÇÃO DOS PROFESSORES DE CIÊNCIAS E BIOLOGIA .",
        "autores": "Mateus Fernandes Rodrigues, Érica Alves Bandeira, André Silva de Oliveira, Naiane Alves Jardim, Filipe Vieira Santos de Abreu",
        "link_pdf": "snct2/41.pdf",
        "evento_id": 3
    },
    {
        "id": 131,
        "titulo": "RELATO DE EXPERIÊNCIA: VIAGEM AO QUILOMBO BOM POSTA",
        "autores": "Marcos Vinícius Dias Silva, Mateus Fernandes Rodrigues, Mateus Dias Martins, Rosana de Jesus dos Santos",
        "link_pdf": "snct2/42.pdf",
        "evento_id": 3
    },
    {
        "id": 132,
        "titulo": "SISTEMA DE REGISTRO DE PRODUTOS QUÍMICOS RESTRITOS PARA LABORATÓRIOS DO CAMPUS SALINAS",
        "autores": "Luis Gustavo Barbosa Santiago, Arthur Faria Porto",
        "link_pdf": "snct2/43.pdf",
        "evento_id": 3
    },
    {
        "id": 133,
        "titulo": "TRABALHANDO A ZOOLOGIA NA EDUCAÇÃO INFANTIL",
        "autores": "Marcos Vinícius Dias Silva, Mateus Fernandes Rodrigues, Lilian Gleisia Alves dos Santos",
        "link_pdf": "snct2/44.pdf",
        "evento_id": 3
    },
    {
        "id": 134,
        "titulo": "UM CLICK PARA A EDUCAÇÃO AMBIENTAL: CONFECÇÃO DE MATERIAL EDUCATIVO AUTORAL PARA CRIANÇAS",
        "autores": "Thaiane Cordeiro Mendes",
        "link_pdf": "snct2/45.pdf",
        "evento_id": 3
    },
    {
        "id": 135,
        "titulo": "UTILIZAÇÃO DA MADEIRA DE HÍBRIDOS DE CORYMBIA NA CONSTRUÇÃO CIVIL",
        "autores": "Bruna Teixeira Barros, Samuel Clevio Pereira, Wagner Patrício de Souza Júnior",
        "link_pdf": "snct2/46.pdf",
        "evento_id": 3
    },
    {
        "id": 95,
        "titulo": "ARBORIZAÇÃO DAS PRAÇAS PÚBLICAS DO MUNICÍPIO DE COMERCINHO- MG",
        "autores": "Thauane Alves Moura, Marília Dutra Massad, Tiago Reis Dutra, Maria Betânia Alves Noronha, Márcia Gabriely Pereira Dos Santos",
        "link_pdf": "snct2/6.pdf",
        "evento_id": 3
    },
    {
        "id": 97,
        "titulo": "ATIVIDADE PROTEOLÍTICA DE BACTÉRIAS ÁCIDO-LÁTICAS ISOLADAS DO REQUEIJÃO MORENO",
        "autores": "Roziane Ferreira Rocha Dos Santos, Graça Pereira de Jesus, Bruna Castro Porto Mendes Carvalho",
        "link_pdf": "snct2/8.pdf",
        "evento_id": 3
    },
    {
        "id": 98,
        "titulo": "AVALIAÇÃO E EDUCAÇÃO INCLUSIVA: UM BREVE PANORAMA DO COLÉGIO ESTADUAL DE EDUCAÇÃO PROFISSIONAL EM GESTÃO E MEIO AMBIENTE DO MUNICIPIO DE BRUMADO-BA",
        "autores": "Kamilly Vitória Borhrer de Almeida, Luane Coqueiro Santos, Luciana Canário Mendes",
        "link_pdf": "snct2/9.pdf",
        "evento_id": 3
    },
    {
        "id": 99,
        "titulo": "CINÉTICA DE SECAGEM DE FRUTOS DESIDRATADOS EM PROTÓTIPO DE SECADOR SOLAR",
        "autores": "Laila Cristina Augusta de Souza lcads2, Luana Conegundes Soares, Mateus Dias Martins, Roberta Magalhães Dias Cardozo, Felipe Cimino Duarte",
        "link_pdf": "snct2/10.pdf",
        "evento_id": 3
    }
];

module.exports = resumos;