# Lista de Tarefas (CRUD) com PERN Stack


# Sobre o projeto

Este projeto é uma lista de tarefas simples que utiliza a stack PERN (PostgreSQL, Express, React e Node.js) para realizar as operações básicas de um CRUD (Create, Read, Update, Delete).

## Funcionalidades
Adicionar Tarefa: Os usuários podem adicionar novas tarefas à lista.
Editar Tarefa: É possível editar o texto de uma tarefa existente.
Excluir Tarefa: As tarefas podem ser excluídas da lista.
Listar Tarefas: Todas as tarefas são listadas na tela principal.

Tecnologias Utilizadas
Frontend: React com componentes funcionais e hooks.
Backend: Node.js e Express para criar a API RESTful.
Banco de Dados: PostgreSQL para armazenar as tarefas.
Gerenciamento de Estado: O estado das tarefas é gerenciado localmente no frontend.

## Layout Web
![Web 1](https://github.com/juniorpinhodev/assets/blob/main/CrudPernTela1.png)

![Web 2](https://github.com/juniorpinhodev/assets/blob/main/CrudPernTela2.png)

![Web 3](https://github.com/juniorpinhodev/assets/blob/main/CrudPernTela3.png)

## Diagrama
![Diagrama](https://github.com/juniorpinhodev/assets/blob/main/Diagrama%20Crud%20Lista%20de%20tarefas.png)

# Tecnologias utilizadas
- Frontend: React com componentes funcionais e hooks, estilizado com CSS, Bootstrap e JavaScript.
- Backend: Node.js e Express para criar a API RESTful.
- Banco de Dados: PostgreSQL para armazenar as tarefas. Utilizou-se também o Insomnia para auxiliar na criação das requisições HTTP (POST, PUT, GET, DELETE).

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


