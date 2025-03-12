# TPC4 - Sistema de Gestão de Cinema

📅 **Data:** 2025-03-12  
👤 **Autor:** Rodrigo Mendes Lima, A104181  
![Foto](../Images/foto.jpg)  

## Descrição

Este projeto implementa um **sistema de gestão de cinema**, permitindo a consulta, adição, edição e remoção de informações sobre filmes. O objetivo é fornecer uma interface simples e eficiente para gerir os dados dos filmes, incluindo o título, descrição, género, ano de lançamento e outras informações relevantes.

O sistema oferece endpoints para:
- Consultar a lista de filmes.
- Visualizar detalhes de um filme específico.
- Editar informações de um filme existente.
- Remover um filme.

## Funcionalidades

- **Lista de Filmes**: Permite visualizar todos os filmes registados no sistema, com informações básicas como título, género e ano de lançamento.
- **Detalhes do Filme**: Exibe informações detalhadas sobre um filme específico, incluindo a descrição e outras informações relevantes.
- **Editar Filme**: Permite editar as informações de um filme já existente.
- **Remover Filme**: Permite eliminar um filme do sistema.

## Endpoints

- **GET /**: Página inicial (Landing page).
- **GET /filmes**: Lista de filmes registados.
- **GET /filmes/edit/{id}**: Formulário para editar as informações de um filme existente.
- **POST /filmes/update/{id}**: Submissão do formulário para editar as informações de um filme com o método POST.
- **GET /filmes/delete/{id}**: Remove um filme do sistema com o método GET.
- **DELETE /filmes/delete/{id}**: Remove um filme do sistema com o método DELETE.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para o desenvolvimento do servidor backend.
- **Express**: Framework para criação de APIs e rotas.
- **Pug**: Motor de templates para renderizar as páginas HTML.
- **W3.CSS**: Framework CSS utilizado para estilizar a interface do utilizador.
- **Axios**: Usado para realizar requisições HTTP.

## Como Usar

1. **Iniciar o servidor**:
    - Execute o servidor localmente usando o comando:
    ```bash
    npm start
    ```
    O servidor estará disponível em `http://localhost:2510`.

2. **Consultar filmes**:
    - Aceda `http://localhost:2510/filmes` para listar os filmes.

3. **Editar filme**:
    - Aceda `http://localhost:2510/filmes/edit/{id}` para editar as informações de um filme existente.

4. **Remover filme**:
    - Aceda `http://localhost:2510/filmes/delete/{id}` para remover um filme.

---

ℹ️ Este projeto foi desenvolvido no âmbito da disciplina de **Engenharia Web** da **Universidade do Minho**.