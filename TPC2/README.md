# TPC2 - Escola de Música

📅 **Data:** 2025-02-20  
👤 **Autor:** Rodrigo Mendes Lima, A104181  
![Foto](../Images/foto.jpg)  

## Descrição

Este projeto implementa um **sistema de gestão para uma escola de música**, permitindo consultar informações sobre cursos, alunos e instrumentos. O objetivo é fornecer uma interface para visualizar, pesquisar e detalhar informações de cada curso oferecido, os alunos inscritos e os instrumentos disponíveis.

O sistema oferece endpoints para:
- Consultar e detalhar **cursos**.
- Consultar e detalhar **alunos** inscritos.
- Consultar e detalhar **instrumentos** utilizados.

## Funcionalidades

- **Consulta de cursos**: Permite visualizar os cursos oferecidos pela escola, com informações sobre professores, duração e número de alunos inscritos.
- **Consulta de alunos**: Exibe informações sobre os alunos matriculados, incluindo o curso que frequentam e os instrumentos que tocam.
- **Consulta de instrumentos**: Permite listar os instrumentos disponíveis na escola e suas características.

## Endpoints

- **GET /**: Página inicial (Landing page).
- **GET /cursos**: Lista de cursos disponíveis.
- **GET /cursos/{id}**: Detalhes de um curso específico, identificado pelo ID.
- **GET /cursos/${id}/alunos** : Alunos que frequentam um determinado curso.
- **GET /alunos**: Lista de alunos matriculados.
- **GET /alunos/{id}**: Detalhes de um aluno específico, identificado pelo ID.
- **GET /instrumentos**: Lista de instrumentos disponíveis na escola.
- **GET /instrumentos/{nome}**: Detalhes de um instrumento específico, identificado pelo nome.
- **GET /instrumentos/{nome}/alunos**: Alunos que tocam um determinado instrumento.


## Testes

Os testes realizados basearam-se em dados de entrada contendo informações sobre cursos, alunos e instrumentos. O sistema foi testado para garantir que:

- Os cursos, alunos e instrumentos são corretamente listados e ordenados conforme os parâmetros fornecidos.
- A filtragem funciona de forma precisa, permitindo procurar por nome do curso, aluno ou instrumento.
- As páginas de detalhes dos cursos, alunos e instrumentos são geradas corretamente.

## Como Usar

1. **Iniciar o servidor Json**:
    - Execute o servidor json localmente usando o comando:
    ```bash
    json-server -w db.json
    ```
    O servidor Json estará disponível em `http://localhost:3000`.

2. **Iniciar o servidor**:
    - Execute o servidor localmente usando o comando:
    ```bash
    node main.js
    ```
    O servidor estará disponível em `http://localhost:4000`.

3. **Consultar cursos**:
    - Aceda `http://localhost:4000/cursos` para listar os cursos.

4. **Consultar alunos**:
    - Aceda `http://localhost:4000/alunos` para listar os alunos.

5. **Consultar instrumentos**:
    - Aceda `http://localhost:4000/instrumentos` para listar os instrumentos.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para o desenvolvimento do servidor backend.
- **Axios**: Usado para realizar requisições HTTP.
- **Tailwind CSS**: Framework CSS utilizado para estilizar a interface do usuário.

---

ℹ️ Este projeto foi desenvolvido no âmbito da disciplina de **Engenharia Web** da **Universidade do Minho**.
