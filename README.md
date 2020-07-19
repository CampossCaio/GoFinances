
<h1 align="center">
    <img alt="GoFinances" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1594342618/logo_gofinaces.png" width="250px" />
</h1>

<p align="center">🚀 Uma aplicação para realização de transações.</p>

<h1 align="center">

 ![align="center"](https://img.shields.io/github/issues/CampossCaio/GoMarketplace?color=%235636d3)
 ![Badge](https://img.shields.io/github/forks/CampossCaio/GoMarketplace?color=%235636d3)
 ![Badge](https://img.shields.io/github/stars/CampossCaio/GoMarketplace?color=%235636d3) 
 
</h1>

<h4 align="center"> 
	🚧  GoFinances 🚀 Concluído  🚧
</h4>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-front-end">ReactJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-iniciando-mobile">React Native</a>
</p>

## 💻 Sobre o projeto

:dollar:  GoFinaces - é uma aplicação que permite ao usuário realizar diversas transaçõe as quais podem ser feitas importando um simples arquivo CSV.


Projeto desenvolvido durante um desafio proposto na jornada GoStack 12, curso produzido pela [Rocketseat](https://blog.rocketseat.com.br).

O intuito de seu desenvolvimento é praticar os conhecimentos sobre [Node.JS](https://nodejs.org/en/), [React.JS](https://reactnative.dev/) entre outras tecnologias como o [Typescript](https://www.typescriptlang.org/) adiquiridos durante a jornada.  

---

## 🎨 Layout


<a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="GoFinances" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1594342658/gofinaces.gif">
</a>

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta backend) 
2. Frontend (pasta frontend)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Ter um banco de dados sql, de preferência postgres.


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/CampossCaio/GoFinances.git

# Acesse a pasta do projeto no terminal/cmd
$ cd GoFinances

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install

# Execute o comando abaixo para executar as migrations
$ npx typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

---

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/CampossCaio/GoFinances.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd GoFinances

# Vá para a pasta da aplicação Front End
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**



#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Postgres](https://www.postgresql.org/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[Joi](https://github.com/hapijs/joi)**



## 🦸 Autor

<a href="https://github.com/CampossCaio">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/52550525?s=400&u=c8dfc4e1c8ef1bf3ed5890ecc40ee98f086ca72b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Campos</b></sub></a> <a href="https://github.com/CampossCaio" title="Caio Campos">🚀</a>
 <br />

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por **Caio Campos** 👋🏻 [Get in touch!](https://github.com/CampossCaio)



