# Documentação do Sistema de Gestão de Livros

## 1. Estrutura do Sistema

### API de Dados (Backend)
- **Porta:** 17000
- **Responsabilidade:** Gestão dos dados de livros no MongoDB
- **Endpoints:**
  - `GET /books` - Lista todos os livros (com filtros por autor, personagem ou gênero)
  - `GET /books/genres` - Lista todos os gêneros únicos
  - `GET /books/:id` - Obtém detalhes de um livro específico
  - POST/PUT/DELETE - Operações CRUD completas

### Interface Web (Frontend)
- **Porta:** 17001
- **Responsabilidade:** Apresentação dos dados ao usuário
- **Rotas:**
  - `/` - Página inicial com lista de livros
  - `/entidades/:idAutor` - Página do autor com od seus livros
  - `/:id` - Página de detalhes de um livro
  
O sistema de gestão de livros foi desenvolvido com dois componentes principais: uma API de dados e uma interface web. A API, construída em Node.js com Express e operando na porta 17000, serve como backend para todas as operações CRUD, permitindo também filtragem por autor e gênero. A interface, desenvolvida com Pug e Express na porta 17001, consome estes dados para apresentação ao utilizador. Durante a preparação dos dados para o MongoDB, implementei um processo de transformação onde: (1) atribuí manualmente IDs inteiros sequenciais como identificadores únicos; (2) converti arrays de autores e generos em strings unificadas, separando múltiplos autores por vírgulas (ex: "Autor1,Autor2"); e (3) normalizei todos os formatos de dados antes da importação final via mongoimport. Esta abordagem garantiu consistência nos relacionamentos e otimizou o desempenho das consultas. A solução final contempla todas as funcionalidades requisitadas, incluindo listagem completa, visualização detalhada de livros e autores, e um sistema eficiente de navegação e filtragem, estando pronta para implementação em ambiente produtivo.

