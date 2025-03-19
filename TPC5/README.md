# TPC5 - Sistema de Gestão de Alunos

📅 **Data:** 2025-03-19
👤 **Autor:** [Seu Nome], [Seu Número de Aluno]  
![Foto](../Images/foto.jpg)  

## Descrição

Este projeto implementa um **sistema de gestão de alunos**, permitindo a consulta, adição, edição e remoção de informações sobre alunos. O objetivo é fornecer uma interface simples e eficiente para gerir os dados dos alunos, incluindo o nome, número de identificação, GitHub e a realização de trabalhos de casa (TPCs).

O sistema é composto por duas partes principais:
- **Interface Web**: Desenvolvida com **Express** e **Pug**, que permite a interação do utilizador através de uma interface gráfica.
- **API de Dados**: Desenvolvida em **Node.js** com **Mongoose**, que gere as operações de base de dados (CRUD) e a lógica de negócio.

## Funcionalidades

### Interface Web (Express + Pug)
- **Lista de Alunos**: Permite visualizar todos os alunos registados no sistema.
- **Detalhes do Aluno**: Exibe informações detalhadas sobre um aluno específico, incluindo o estado dos TPCs.
- **Adicionar Aluno**: Permite adicionar um novo aluno ao sistema.
- **Editar Aluno**: Permite editar as informações de um aluno existente.
- **Remover Aluno**: Permite eliminar um aluno do sistema.

### API de Dados (Node.js + Mongoose)
- **Operações CRUD**: 
  - `GET /alunos`: Lista todos os alunos.
  - `GET /alunos/:id`: Obtém os detalhes de um aluno específico.
  - `POST /alunos`: Adiciona um novo aluno.
  - `PUT /alunos/:id`: Atualiza as informações de um aluno existente.
  - `DELETE /alunos/:id`: Remove um aluno do sistema.
- **Gestão de TPCs**:
  - `PUT /alunos/:id/tpc/:idTpc`: Inverte o estado de um TPC específico (concluído/não concluído).

## Tecnologias Utilizadas

- **Node.js**: Utilizado para o desenvolvimento do servidor backend.
- **Express**: Framework para criação de APIs e rotas.
- **Pug**: Motor de templates para renderizar as páginas HTML.
- **Mongoose**: Biblioteca para interagir com a base de dados MongoDB.
- **W3.CSS**: Framework CSS utilizado para estilizar a interface do utilizador.
- **Axios**: Usado para realizar requisições HTTP entre a interface web e a API de dados.

## Como Usar

### Interface Web
1. **Iniciar o servidor**:
    - Execute o servidor localmente usando o comando:
    ```bash
    npm start
    ```
    A interface estará disponível em `http://localhost:1103`.


### API de Dados
1. **Iniciar a API**:
    - Execute a API localmente usando o comando:
    ```bash
    npm start
    ```
    A API estará disponível em `http://localhost:3000`.


---

ℹ️ Este projeto foi desenvolvido no âmbito da disciplina de **Engenharia Web** da **Universidade do Minho**.