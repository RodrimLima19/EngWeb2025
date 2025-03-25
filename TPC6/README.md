# TPC6 - Sistema de Gestão de Contratos Públicos

📅 **Data:** 2025-03-25  
👤 **Autor:** Rodrigo Mendes Lima, A104181 
![Foto](../Images/foto.jpg)  

## Descrição

Este projeto implementa um **sistema de gestão de contratos públicos**, permitindo a consulta e análise de contratos públicos. O objetivo é fornecer uma interface simples e eficiente para explorar dados de contratos, incluindo entidades contratantes, valores, datas e tipos de procedimento.

O sistema é composto por duas partes principais:
- **Interface Web**: Desenvolvida com **Express** e **Pug**, que permite a interação do utilizador através de uma interface gráfica.
- **API de Dados**: Desenvolvida em **Node.js** com **Mongoose**, que gere as operações de base de dados e a lógica de negócio.

## Funcionalidades

### Interface Web (Express + Pug)
- **Lista de Contratos**: Permite visualizar todos os contratos registados no sistema.
- **Detalhes do Contrato**: Exibe informações detalhadas sobre um contrato específico.
- **Contratos por Entidade**: Lista todos os contratos associados a uma entidade específica (por NIPC).

### API de Dados (Node.js + Mongoose)
- **Operações CRUD**: 
  - `GET /contratos`: Lista todos os contratos.
  - `GET /contratos/:id`: Obtém os detalhes de um contrato específico.
  - `POST /contratos`: Adiciona um novo contrato.
  - `PUT /contratos/:id`: Atualiza as informações de um contrato existente.
  - `DELETE /contratos/:id`: Remove um contrato do sistema.
- **Consultas Específicas**:
  - `GET /contratos?entidade=[nome]`: Filtra contratos por entidade.
  - `GET /contratos?tipo=[tipo]`: Filtra contratos por tipo de procedimento.
  - `GET /contratos/entidades`: Lista todas as entidades.
  - `GET /contratos/entidades/:nipc`: Lista contratos por NIPC de entidade.
  - `GET /contratos/tipos`: Lista todos os tipos de procedimento.

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
    A interface estará disponível em `http://localhost:16001`.

### API de Dados
1. **Iniciar a API**:
    - Execute a API localmente usando o comando:
    ```bash
    npm start
    ```
    A API estará disponível em `http://localhost:16000`.

## Estrutura de Portas
- **API de Dados**: 16000
- **Interface Web**: 16001

---

ℹ️ Este projeto foi desenvolvido no âmbito da disciplina de **Engenharia Web** da **Universidade do Minho**.