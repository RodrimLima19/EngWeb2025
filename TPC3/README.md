# TPC3 - Gestão de Alunos

📅 **Data:** 2025-02-26  
👤 **Autor:** Rodrigo Mendes Lima, A104181  
![Foto](../Images/foto.jpg)  

## Descrição

Este projeto implementa um **sistema de gestão de alunos** para uma escola, permitindo a consulta, adição, edição e remoção de informações sobre alunos. O objetivo é fornecer uma interface simples e eficiente para gerir os dados dos alunos, incluindo o seu nome, ID, link do GitHub e os Trabalhos de Casa (TPCs) concluídos.

O sistema oferece endpoints para:
- Consultar a lista de alunos.
- Visualizar detalhes de um aluno específico.
- Adicionar um novo aluno.
- Editar informações de um aluno existente.
- Remover um aluno.

## Funcionalidades

- **Lista de Alunos**: Permite visualizar todos os alunos registados no sistema, com informações básicas como nome, ID e link do GitHub.
- **Detalhes do Aluno**: Exibe informações detalhadas sobre um aluno específico, incluindo os TPCs concluídos.
- **Adicionar Aluno**: Permite adicionar um novo aluno ao sistema, fornecendo o nome, ID, link do GitHub e os TPCs concluídos.
- **Editar Aluno**: Permite editar as informações de um aluno já existente.
- **Remover Aluno**: Permite eliminar um aluno do sistema.

## Endpoints

- **GET /**: Página inicial (Landing page).
- **GET /alunos**: Lista de alunos registados.
- **GET /alunos/{id}**: Detalhes de um aluno específico, identificado pelo ID.
- **GET /alunos/registo**: Formulário para adicionar um novo aluno.
- **POST /alunos/registo**: Submissão do formulário para adicionar um novo aluno.
- **GET /alunos/edit/{id}**: Formulário para editar as informações de um aluno existente.
- **POST /alunos/edit/{id}**: Submissão do formulário para editar as informações de um aluno com o método post.
- **PUT /alunos/edit/{id}**: Submissão do formulário para editar as informações de um aluno com o método put.
- **GET /alunos/delete/{id}**: Remove um aluno do sistema com o método get.
- **DELETE /alunos/delete/{id}**: Remove um aluno do sistema com o método delete.

## Testes

Os testes realizados basearam-se em dados de entrada contendo informações sobre alunos. O sistema foi testado para garantir que:

- Os alunos são corretamente listados e ordenados.
- As operações de adição, edição e remoção de alunos funcionam conforme esperado.
- As páginas de detalhes dos alunos são geradas corretamente, incluindo os TPCs concluídos.

## Como Usar

1. **Iniciar o servidor Json**:
    - Execute o servidor json localmente usando o comando:
    ```bash
    json-server -w alunos.json
    ```
    O servidor Json estará disponível em `http://localhost:3000`.

2. **Iniciar o servidor de alunos**:
    - Execute o servidor localmente usando o comando:
    ```bash
    node alunos_server_skeleton.js
    ```
    O servidor estará disponível em `http://localhost:7777`.

3. **Consultar alunos**:
    - Aceda `http://localhost:7777/alunos` para listar os alunos.

4. **Adicionar aluno**:
    - Aceda `http://localhost:7777/alunos/registo` para adicionar um novo aluno.

5. **Editar aluno**:
    - Aceda `http://localhost:7777/alunos/edit/{id}` para editar as informações de um aluno existente.

6. **Remover aluno**:
    - Aceda `http://localhost:7777/alunos/delete/{id}` para remover um aluno.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para o desenvolvimento do servidor backend.
- **Axios**: Usado para realizar requisições HTTP.
- **HTML/CSS**: Para a criação das páginas web.
- **W3.CSS**: Framework CSS utilizado para estilizar a interface do usuário.
- **Postman**: Utilizado para testar os endpoints de `PUT` e `DELETE`.

---

ℹ️ Este projeto foi desenvolvido no âmbito da disciplina de **Engenharia Web** da **Universidade do Minho**.