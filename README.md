# **Lista de Tarefas (CRUD) com PERN Stack**


# Sobre o projeto

Este projeto é uma lista de tarefas fullstack que utiliza a stack PERN (PostgreSQL, Express, React e Node.js) para realizar as operações básicas de um CRUD (Create, Read, Update, Delete).

## O que é CRUD?
**CRUD é um acrônimo para:**

- C - Create (Criar): Criar novos registros ou entidades no banco de dados.
- R - Read (Ler): Ler ou recuperar registros ou entidades do banco de dados.
- U - Update (Atualizar): Atualizar registros ou entidades existentes no banco de dados.
- D - Delete (Excluir): Excluir registros ou entidades existentes no banco de dados.

## O que é PERN?
**PERN é um acrônimo para:**

- P - PostgreSQL: Banco de dados relacional
- E - Express.js: Framework Node.js para desenvolvimento de APIs
- R - React.js: Biblioteca JavaScript para construir interfaces de usuário
- N - Node.js: Ambiente de execução JavaScript do lado do servidor


## Funcionalidades do projeto
- **Adicionar Tarefa:** Os usuários podem adicionar novas tarefas à lista.
- **Editar Tarefa:** É possível editar o texto de uma tarefa existente.
- **Excluir Tarefa:** As tarefas podem ser excluídas da lista.
- **Listar Tarefas:** Todas as tarefas são listadas na tela principal.

## Tecnologias utilizadas
- **Frontend:** *React* com componentes funcionais e hooks, estilizado com *CSS*, *Bootstrap* e *JavaScript*.
- - React.js
- - Javascript
- - JSX
- - CSS
- - Bootstrap

- **Backend:** *Node.js* e *Express* para criar a API RESTful.
- - Node.js
- - Express.js

- **Banco de Dados:** *PostgreSQL* para armazenar as tarefas. Utilizou-se também o *Insomnia* para auxiliar na criação das requisições HTTP (POST, PUT, GET, DELETE).
- - PostgreSQL
- - Insomnia





## Gerenciamento de Estado
O estado das tarefas é gerenciado localmente no frontend.

### Layout Web Frontend 
![Web 1](https://github.com/juniorpinhodev/assets/blob/main/CrudPernTela1.png)

![Web 2](https://github.com/juniorpinhodev/assets/blob/main/CrudPernTela2.png)

![Web 3](https://github.com/juniorpinhodev/assets/blob/main/CrudPernTela3.png)

## Diagrama
![Diagrama](https://github.com/juniorpinhodev/assets/blob/main/Diagrama%20Crud%20Lista%20de%20tarefas.png)

# Como usar

## Clone este repositório
```bash
git clone https://github.com/juniorpinhodev/CRUD-PERN.git
```
#### - Instale as dependências do frontend e do backend utilizando npm install dentro dos diretórios backend e frontend, respectivamente.
#### - Inicie o servidor backend com 'node index.js' dentro do diretório backend.
#### - Inicie o servidor frontend com 'npm start' dentro do diretório frontend.
#### - Acesse o aplicativo em seu navegador em http://localhost:3000.

## Backend
Pré-requisitos: Node 20.10.0 ou superior

# Entrar na pasta do projeto backend
```bash
cd backend
```
# instalar as dependências
com NPM
```bash
npm install
```
OU com Yarn
```bash
yarn install
```
# executar o projeto
com NPM
```bash
node index.js
```


## Frontend
Pré-requisitos: npm / yarn

# entrar na pasta do projeto front end web
```bash
cd frontend
```
# instalar as dependências
com NPM
```bash
npm install
```
OU com Yarn
```bash
yarn install
```
# executar o projeto
com NPM
```bash
npm start
```
OU com Yarn
```bash
yarn start
```

# Estrutura do Projeto
- frontend/src/components/InputTasks.js: Componente para adicionar novas tarefas.
- frontend/src/components/EditTasks.js: Componente para editar tarefas existentes.
- frontend/src/components/ListTasks.js: Componente para exibir a lista de tarefas e interagir com elas.
- backend/index.js: Servidor Express que define as rotas da API RESTful para manipulação das tarefas no banco de dados.

# Configuração do Banco de Dados
### Para configurar o banco de dados PostgreSQL para este projeto, siga os passos abaixo:
#### Crie um novo banco de dados com o nome taskspern_db:
´´´SQL
CREATE DATABASE taskspern_db;
´´´
#### Crie uma tabela chamada tasks com as colunas tasks_id (chave primária) e description:
```SQL
CREATE TABLE tasks(
  tasks_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
```
Configure a conexão com o banco de dados no arquivo backend/db.js:
```javascript
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "taskspern_db"
});

module.exports = pool;
```



# Autor

Jedir de O. Pìnho Junior
(Junior Pinho DEV)

https://www.juniorpinho.tech <br>

https://www.linkedin.com/in/juniorpinhodev


