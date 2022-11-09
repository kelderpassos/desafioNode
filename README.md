# Desafio Node

<details open> 
<summary>:brazil: Versão em Português</summary>

## Objetivo

Construir uma API REST do tipo CRUD para gerenciar o banco de dados do tipo SQL Server que contém o cadastro de usuários de uma plataforma.

## Características
- autenticação de usuário é feita na rota /login com JWT;
- O banco de dados possui duas tabelas: users e addresses sob a relação de 1:N;
- a conexão com o banco de dados foi feita com o ORM Sequelize;
- uma vez autenticado, é possível buscar, criar, atualizar e deletar usuários

## Desafios
- Trabalhar pela primeira vez com SQL Server e aprender sobre seus detalhes;
- Construir as migrations de modo que a relação 1:N ocorresse corretamente e que mudanças em users pudessem repercutir no addresses;
- Tratar erros de maneira robusta e sólida;

## Observações

Essa aplicação não usa recursos armazenáveis em cache, então ainda não é uma api do tipo RESTful. <br />
<br />

## Instalação

Para instalar e executar a aplicação, é necessário clonar este repositório num diretório que deseje. Dessa forma, abra o terminal 
na pasta onde deseja armazenar o projeto e rode:

```
git clone git@github.com:kelderpassos/desafioNode.git
```

Após o término da operação, acesse a pasta e rode o comando para a instalação das dependências do projeto:

```
cd desafioNode/backend && npm install
```

A aplicação não vem com variáveis de ambiente por motivos de segurança, portanto é necessário que você insira as credenciais do seu banco de dados.
Para criar o arquivo com as variáveis, rode na pasta que o terminal já está:

```
touch .env
```

Abra este arquivo e insira as seguintes variáveis:

```
DATABASE=NOME-DO-TABELA-SQL-SERVER
USERNAME=USUÁRIO-DO-SEU-BANCO
PASSWORD=SENHA-DO-SEU-BANCO
PORT=PORTA-QUE-DESEJA-USAR
HOST=127.0.0.1 (para rodar localmente)
DIALECT=mssql (dialeto para rodar SQL Server)
JWT_SECRET=SEGREDO-JWT-QUE-DESEJAR
```
Com estes valores estabelecidos, só falta agora rodar o comando para criar o banco e as tabelas

```
npm run prestart
```

E o comando para iniciar a aplicação

```
npm run dev
```

Pronto! Você já deve estar apto a fazer o CRUD de usuários.

<br />

## Saídas ou Endpoints

### Login

| Requisição | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/login |

### User

| Requisição | URL                            |
| ---------- | ------------------------------ |
| `GET`      | http://localhost:3000/user     |
| `GET`      | http://localhost:3000/user/:id |
| `POST`     | http://localhost:3000/signup   |
| `PUT`      | http://localhost:3000/user/:id |
| `DELETE`   | http://localhost:3000/user/:id |


<br />


</details>
