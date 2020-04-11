# Rádio PBCH - 53

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Produto](#2-produto)
  * [2.1. Definição do Produto](#21-definição-do-produto)
  * [2.2. Interface](#22-interface)
  * [2.3. Utilização](#23-utilização)
* [3. Considerações técnicas](#3-considerações-técnicas)
  * [3.1. Ferramentas](#31-ferramentas)
  * [3.2. Scripts](#32-scripts)
* [4. Autora](#4-autora)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

É um tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

No exemplo abaixo usamos o deslocamento (_offset_) de 3 posições:

![caeser-cipher](src/img/cifraDeCesar.png)

## 2. Produto

![tela](src/img/radioPBCH.png)

### 2.1. Definição do produto

Como uma entusiasta por histórias misteriosas e envolventes, não poderia deixar de me interessar pelo mistério envolvendo a [rádio UVB - 76](https://pt.wikipedia.org/wiki/UVB-76). Como primeiro projeto pela Laboratória, decidi brincar um pouco com o tema e pensar em uma forma de incorporá-lo ao objetivo proposto.
Criei esse produto me deixando levar pela teoria de que as transmissões estão relacionadas ao governo russo e possivelmente às **RVSN** - Forças Estratégicas de Mísseis da Rússia, dessa forma a plataforma que criei auxiliaria o contato entre os transmissores e os receptores do código, no qual poderiam escolher a chave de deslocamento desejada e facilmente cifrar ou decifrar a mensagem a ser enviada. 

Com uma pitada a mais de imaginação, esse site ainda poderia ser utilizado por espiões que, com muita astúcia, obtiveram acesso ao link da rádio.

### 2.2. Interface

### 2.3. Utilização

No site é possível escolher uma chave de deslocamento previamente definida entre 1 e 10. Com a escolha desta é possível decidir entre cifrar ou decifrar uma mensagem, a qual pode receber letras maiúsculas, minúsculas, números e caracteres especiais.

## 3. Considerações técnicas

### 3.1. Ferramentas

Nesse projeto foi utilizado **HTML**, **CSS** e vanilla JavaScript.

### 3.2. Scripts

Nesse projeto é necessário utilizar alguns comandos para que tudo funcione corretamente.
Primeiramente é importante ter o **Node.JS** e o **NPM** instalados em sua máquinas para executar os comandos a seguir:

* `
npm install
` para instalar todas as dependências contidas no projeto.

* `
npm start
`, o qual vai inicializar o servidor e possibilitar a visualização do projeto.

* `
npm test
` para execução de testes nos arquivos e, assim, garantir o correto funcionamento dos mesmos.

* `
npm run deploy
` para publicar seu projeto no GitHub Pages.

## 4. Autora 

**Natasha Costa** - natasha.gr.costa@gmail.com
