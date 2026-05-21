# Anais da Semana Nacional de Ciência e Tecnologia - IFNMG Campus Salinas

Este repositório contém o código-fonte (HTML e CSS) da página de Anais da **Semana Nacional de Ciência e Tecnologia do IFNMG Campus Salinas**. 

O site atua como repositório oficial das publicações científicas (resumos simples em formato de pôster) do evento. O layout foi projetado com uma interface limpa e institucional — inspirado na Sociedade Brasileira de Química (SBQ) — e estruturado **rigorosamente** para atender aos critérios do Centro Brasileiro do ISSN (CBISSN) para a atribuição de ISSN a recursos contínuos online.

---

## 🎯 Requisitos do ISSN Atendidos na Estrutura

Para garantir a aprovação do ISSN, o código foi modelado respeitando as seguintes diretrizes:

* **Título Padronizado (Regra 2):** O título oficial adotado é `Semana Nacional de Ciência e Tecnologia do IFNMG Campus Salinas` (sem hifens, pontos ou dois-pontos). Ele está fixado em destaque na tag `<header>` para aparecer de forma idêntica no topo de todas as páginas ou abas do recurso contínuo.
* **Navegação Obrigatória (Regra 3):** A página principal possui âncoras claras que identificam a continuidade editorial, conforme exigido:
  * `Apresentação`: Texto de opinião e objetivos do recurso.
  * `Expediente`: Instituição, periodicidade, endereço institucional e comitê editorial.
  * `Normas para Publicação`: Diretrizes de submissão aos autores.
  * `Edições dos Fascículos`: Organização com a devida designação numérica (ex: Vol. 3 nov. 2025).
* **Acesso e Preservação Digital (Regra 1):** O HTML está preparado com seções onde as URLs devem apontar diretamente para os PDFs hospedados no próprio servidor da instituição (ou sistema próprio de anais), evitando serviços de armazenamento externo temporários (como Google Drive), assegurando a manutenção a longo prazo e a inexistência de links quebrados.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de todo o conteúdo.
* **CSS3:** Estilização incorporada no próprio arquivo (`<style>`) para garantir um carregamento rápido, limpo e responsivo. Não requer frameworks externos para funcionar.

---

## 📂 Estrutura da Página (`index.html`)

O arquivo principal é um modelo de *Single Page Application* (página única) dividida nas seguintes seções:

1. **Header:** Logotipo e Título exato da publicação.
2. **Nav:** Menu principal com os links âncoras obrigatórios.
3. **Banner (Opcional):** Espaço para a identidade visual anual do evento (desenho ganhador do concurso discente).
4. **Sections (`#apresentacao`, `#expediente`, `#normas`, `#edicoes`):** Blocos de texto que cumprem os requisitos de transparência e histórico do corpo editorial.
5. **Footer:** Direitos autorais e datas de publicação/atualização da página.

---

## 🚀 Como Utilizar e Customizar (Guia para TI/Desenvolvedores)

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU-USUARIO/snct-ifnmg-salinas.git](https://github.com/SEU-USUARIO/snct-ifnmg-salinas.git)