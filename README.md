<h1 align="center" style="padding: 50px;">
<img alt="gomarkeplace" src="./img/logo@3x.png" width="auto" heigth="auto"/>
</h1>

<div align="center" style="margin: 20px;">

[![The MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](http://github.com/jvictorfarias/gomarketplace/LICENSE.md)
![GitHub last commit](https://img.shields.io/github/last-commit/jvictorfarias/gomarketplace?color=green&style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/jvictorfarias/gomarketplace?style=flat-square)

<p align="center" >
  <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
  <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
  <a href="#hammer-deploy-da-aplicação"> :hammer: Deploy da Aplicação</a> |
  <a href="#thinking-como-contribuir?"> :thinking: Como Contribuir?</a> |
  <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a>
</p>

</div>

## :bookmark_tabs: Sobre o Projeto

Aplicação que simula uma loja virtual, em que podemos mantar o controle de um carrinho de compras,
ao mesmo tempo que que podemos adicionar produtos, ver a quantidade que o carrinho possui e o somatório
da compra, tudo através de contexto.

## :fire: Pŕevia da Aplicação

<h1 align="center">
<img src="./img/preview.gif">
</h1>

### :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Feather Icons](https://feathericons.com/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Bootsplash](https://www.npmjs.com/package/react-native-bootsplash)
- [json-server](https://www.npmjs.com/package/json-server)
- [Jest](https://jestjs.io/)
- [Styled-Components](https://styled-components.com/)

## :hammer: Deploy da Aplicação

{...}

## :thinking: Como Contribuir?

**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gomarketplace

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone https://github.com/jvictorfarias/gomarkeplace.git
$ cd gomarkeplace
$ yarn
```

### Iniciando a Fake API

```sh
$ yarn json-server server.json -p 3333
```

#### Iniciando o Mobile(Android)
```sh
$ cd gomarketplace
$ yarn && yarn android && yarn start
```

### :memo: Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :purple_heart: by <strong> Joao Victor Farias</strong> </p>
