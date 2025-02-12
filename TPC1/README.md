# TPC1 - Oficina de Viaturas

📅 **Data:** 2024-02-12  
👤 **Autor:** Rodrigo Mendes Lima, A104181  
![Foto](../Images/foto.jpg)  

## Descrição

Este projeto implementa um **sistema de gestão para oficina de viaturas**, permitindo consultar informações sobre viaturas, reparações e intervenções realizadas. O objetivo é fornecer uma interface para visualizar, pesquisar e detalhar informações de cada viatura, as reparações realizadas e as intervenções executadas.

## Funcionalidades

- **Consulta de viaturas**: Permite consultar viaturas por marca e modelo. Os usuários podem visualizar detalhes das viaturas, como características específicas de cada uma e as reparações associadas a cada marca.
- **Consulta de reparações**: Exibe informações sobre reparações realizadas, incluindo o histórico das intervenções e detalhes da viatura reparada.
- **Consulta de intervenções**: Permite listar as intervenções realizadas nas viaturas com detalhes do código de cada uma e as respetivas reparações associadas.

## Testes

Os testes realizados basearam-se em dados de entrada contendo informações sobre viaturas, reparações e intervenções. O sistema foi testado para garantir que:

- As viaturas, reparações e intervenções são corretamente listadas e ordenadas conforme os parâmetros fornecidos.
- A filtragem funciona de forma precisa, permitindo procurar por marca, modelo, matrícula, código de intervenção, entre outros.
- As páginas de detalhes das viaturas, reparações e intervenções são geradas corretamente.

## Como Usar

1. **Iniciar o servidor Json**:
    - Execute o servidor json localmente usando o comando na diretoria data:
    ```bash
    json-server -w dataset_new.json
    ```
    O servidor Json estará disponível em `http://localhost:3000`.

2. **Iniciar o servidor**:
    - Execute o servidor localmente usando o comando:
    ```bash
    node app.js
    ```
    O servidor estará disponível em `http://localhost:4000`.

3. **Consultar viaturas**:
    - Aceda `http://localhost:4000/viaturas` para listar as viaturas.
    - Use parâmetros como `marca` e `modelo` para filtrar as viaturas.

4. **Consultar reparações**:
    - Aceda `http://localhost:4000/reparacoes` para listar as reparações.
    - Use parâmetros como `viatura`, `marca` e `intervencao` para filtrar as reparações realizadas.

5. **Consultar intervenções**:
    - Aceda `http://localhost:4000/intervencoes` para listar as intervenções.
    - Filtre as intervenções por código ou outros parâmetros.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para o desenvolvimento do servidor backend.
- **Axios**: Usado para realizar requisições HTTP.
- **Tailwind CSS**: Framework CSS utilizado para estilizar a interface do usuário.
- **Express**: Framework web para facilitar o roteamento e o gerenciamento de requisições HTTP.

---

ℹ️ Este projeto foi desenvolvido no âmbito da disciplina de **Engenharia** da **Universidade do Minho**.
