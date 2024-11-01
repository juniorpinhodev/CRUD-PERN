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
- - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- - ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- - ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- - ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

- **Backend:** *Node.js* e *Express* para criar a API RESTful.
- - ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- - ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- **Banco de Dados:** *PostgreSQL* para armazenar as tarefas. Utilizou-se também o *Insomnia* para auxiliar na criação das requisições HTTP (POST, PUT, GET, DELETE).
- - ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- - ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Interface do Usuário

A Interface do Usuário deste projeto consiste em um layout simples e intuitiva para gerenciar a lista de tarefas. <br>
Ao acessar a tela principal, o usuário encontra uma caixa de texto onde pode digitar uma nova tarefa e um botão verde "Adicionar" para inserir a tarefa na lista. <br> <br>
Cada item da lista é exibido logo abaixo da caixa de texto, com dois botões associados a ele: um botão amarelo "Editar" e um botão vermelho "Deletar". <br>
Esses botões permitem que o usuário edite o texto da tarefa ou a remova da lista, respectivamente. <br> <br>
![Web 1](https://github.com/juniorpinhodev/assets/blob/main/IMG_CRUD_PERN/layout1.png) <br> <br>

Quando o usuário decide editar uma tarefa, ele clica no botão "Editar" e um modal se abre. O modal exibe um campo de texto com o texto atual da tarefa, permitindo que o usuário faça a correção. <br>
Além disso, o modal contém dois botões: o botão vermelho "Cancelar", que fecha o modal sem fazer alterações, e o botão azul "Confirmar", que salva as alterações feitas na tarefa. <br> <br>
![Web 2](https://github.com/juniorpinhodev/assets/blob/main/IMG_CRUD_PERN/layout2.png) <br> <br>





## Diagrama do Projeto
O diagrama do projeto ilustra o fluxo de dados entre o frontend e o backend da aplicação. 
Ao preencher a caixa de texto e clicar no botão "Adicionar", uma requisição POST é enviada para o backend através do protocolo HTTP. O backend recebe essa requisição, adiciona um novo item à lista de tarefas e o armazena no banco de dados PostgreSQL.

Para as operações de editar, deletar e exibir na tela, o fluxo é semelhante: uma requisição é enviada do frontend para o backend, que realiza as operações necessárias no banco de dados e retorna os dados atualizados para o frontend.

O diagrama abaixo visualiza esse processo de forma clara e mostra a interação entre as diferentes partes da aplicação, destacando a comunicação entre frontend, backend e banco de dados. <br> <br>
![Diagrama](https://github.com/juniorpinhodev/assets/blob/main/Diagrama%20Crud%20Lista%20de%20tarefas.png)


## Estrutura do Projeto
O projeto está dividido em duas pastas:

**Backend:** O diretório contém os arquivos relacionados ao servidor Node.js Express.

- database.sql: Script SQL para criar a tabela tasks no banco de dados PostgreSQL.
- db.js: Arquivo de configuração para conexão com o banco de dados.
- index.js: Contém o código principal do servidor, incluindo rotas para gerenciar tarefas (POST, GET, PUT, DELETE).


**frontend:** Diretório contendo o código da interface do usuário React.

- src/App.css e src/index.css: Arquivos de estilos da aplicação.
- src/App.js e src/index.js: Arquivos principais do frontend.
- src/components: Pasta contendo os componentes da aplicação.
- - components/InputTasks.js: Componente para adicionar tarefas.
- - components/ListTasks.js: Componente para listar tarefas.
- - components/EditTasks.js: Componente para editar tarefas.

```code
backend/
├── database.sql
├── db.js
└──index.js
 

frontend/
└── src
        ├──components
            ├── EditTasks.js
            ├── InputTasks.js
            └── ListTasks.js
        ├── App.css
        ├── App.js
        ├── index.css
        └──index.js
```

## Gerenciamento de Estado

O estado das tarefas neste projeto é gerenciado localmente no frontend utilizando React Hooks. 
O hook *useState* é utilizado para armazenar a lista de tarefas em um estado interno do componente *ListTasks*. 
As funções para adicionar, editar e excluir tarefas são responsáveis por atualizar este estado, e o componente *ListTasks* re-renderiza automaticamente a lista de acordo com as mudanças no estado.

#### **Detalhes da Implementação:**

**Armazenamento do Estado:**
A lista de tarefas é armazenada em um array dentro do estado do componente *ListTasks*.
Cada tarefa no array é um objeto com as propriedades *id* e *description*.

**Atualização do Estado:**
A função *addTask* utiliza o hook *useState* para atualizar o estado com a nova tarefa adicionada.
As funções *editTask* e *deleteTask* utilizam o hook *useState* para atualizar o estado com a tarefa editada ou removida, respectivamente.
**Re-renderização:**
O componente *ListTasks* re-renderiza automaticamente a lista de tarefas sempre que o estado interno é atualizado.


## Configuração do Banco de Dados
#### Para configurar o banco de dados PostgreSQL para este projeto, siga os passos abaixo:
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
  user: "SEU_USUARIO",
  password: "SUA_SENHA",
  host: "localhost",
  port: 5432,
  database: "SEU_DATABASE"
});

module.exports = pool;
```

## Guia de Instalação / Como Rodar o Projeto

### Clone este repositório
```bash
git clone https://github.com/juniorpinhodev/CRUD-PERN.git
```
### Instalando as Dependências

**Backend**
**Pré-requisitos: Node 20.10.0 ou superior**

#### 1. Entrar na pasta do projeto backend
```bash
cd backend
```
#### 2. instalar as dependências
```bash
npm install
```


**Frontend**
**Pré-requisitos: npm / yarn**

#### 1. entrar na pasta do projeto frontend
```bash
cd frontend
```
#### 2. instalar as dependências
- com **npm**
```bash
npm install
```
- OU com **Yarn**
```bash
yarn install
```
## executar o projeto

### Backend

#### 1. Inicie o servidor **backend**
```bash
node index.js
```
### Frontend

#### 1. Inicie o servidor **frontend**

- com NPM
```bash
npm start
```
- OU com Yarn
```bash
yarn start
```

# Acessando o Aplicativo
Acesse o aplicativo em seu navegador em http://localhost:3000.

Este guia de instalação fornece instruções claras e separadas para instalar e executar tanto o backend quanto o frontend do projeto, tornando-o mais fácil de entender e seguir.


# Expressão de Gratidão e Contatos
Agradeço por visualizar este projeto! Para mais informações, visite meu portfolio ou entre em contato pelo LinkedIn ou e-mail.


**Jedir de O. Pìnho Junior** <br>
(Junior Pinho DEV)

[Portfólio profissional](https://www.juniorpinho.DEV) (Me conheça melhor)<br>

[Meu Linkedin](https://www.linkedin.com/in/juniorpinhodev) <br>

[Envie um e-mail](mailto:juniorpinhodev@gmail.com)



