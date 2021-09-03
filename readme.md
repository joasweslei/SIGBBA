# SIGBBA

Este projeto se trata de um sistema gerenciamento que sera utilizado pelo banco de alimentos de Ubá-MG.

A estrutura do projeto foi construída em um monorepo.

## Configuração inicial do projeto

### Pré requisitos

- npm e yarn
- Docker e docker-compose

### Configurando variáveis de ambiente

As variáveis de ambiente são variáveis globais que irão conter informações sensíveis sobre o projeto como o USERNAME e PASSWORD para se conectar com o banco ou com algum serviço externo.

Para configurar as variáveis de ambiente, entre na pasta `packages/server` e dentro dela você encontrará um arquivo de nome `.env.example`. Basta duplicar esse arquivo e renomeá-lo para: `.env` preenchendo os dados, caso necessário, dentro do arquivo recém criado.

### Rodando projeto

Primeiramente, rode o comando: `yarn` na raiz do projeto a partir do terminal para baixar as dependências dos projetos dentro do monorepo.

Em seguida, basta rodar o comando `docker-compose up -d` para rodar o projeto.

O projeto está com docker-compose configurado para realizar a instalação de todas as dependências necessárias para rodar o projeto, sendo assim, basta rodar o comando acima que o docker será responsável por instalar a versão correta do nodejs e do postgres e também será responsável por rodar tudo em containers separados mas garantindo que os containers se comuniquem entre si.

### Rodando as migrations

Migrations são um conjunto de arquivos que se comportam como um script que irá configurar toda a estrutura do banco de dados recém criado na secção anterior, isso é, irá criar todas as tabelas, relacionamentos, plugins, etc... Para isso, basta rodar o comando abaixo:

`docker-compose run server yarn typeorm migration:run`

A parte do comando `docker-compose run server` é responsável por informar que o comando que virá a seguir deve ser rodado dentro do serviço <b>server</b> que foi levantado pelo comando `docker-compose up -d`.

### Auto gerando migration a partir das entidades

As migrations no TypeORM podem ser autogeradas a partir das entidade, para autogerar basta rodar o comando abaixo:

`docker-compose run server yarn typeorm migration:generate -n NomeDaEntidade`

É importante lembrar que a entidade precisa ter sido criada previamente na pasta `/packages/server/src/app/entities`
