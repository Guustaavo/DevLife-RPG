- Dev Life

Dev Life é um jogo de simulação desenvolvido em JavaScript e executado exclusivamente pelo terminal.
No jogo, o jogador assume o papel de um desenvolvedor e precisa evoluir sua carreira ao longo do tempo. Para isso, deverá administrar sua energia, ganhar experiência (XP) e conquistar novos cargos.
O personagem possui os seguintes atributos:

Nome

Idade

XP

Energia

Cargo

Durante o jogo, o jogador poderá realizar diferentes atividades para ganhar XP, recuperar energia e evoluir profissionalmente.


- Objetivo
O objetivo do Dev Life é evoluir na carreira de desenvolvimento, começando em um cargo inicial e conquistando cargos melhores através do ganho de XP.
A progressão poderá seguir uma estrutura semelhante a:

Estagiário
    ↓
Desenvolvedor Júnior
    ↓
Desenvolvedor Pleno
    ↓
Desenvolvedor Sênior
    ↓
Tech Lead

Cada evolução exigirá uma determinada quantidade de XP.


- Funcionalidades

Sistema de Personagem

Cadastro de personagem

Consulta de personagem

Atualização de dados

Exclusão de personagem

Visualização dos atributos


- Sistema de Trabalho
O jogador poderá trabalhar para ganhar XP.
O trabalho também consumirá energia, fazendo com que o jogador precise administrar seus recursos.
Exemplo:

Trabalhar

+140 XP
-20 Energia


- Sistema de Estudos
O jogador poderá estudar para ganhar XP.
Exemplo:

Estudar

+70 XP
-10 Energia


- Sistema de Energia
A energia será utilizada para limitar as ações do jogador.
Quando a energia estiver baixa, algumas ações poderão ficar indisponíveis.
O jogador poderá recuperar energia através de ações de descanso.


- Sistema de Cargos
O cargo do jogador será atualizado conforme ele atingir determinados níveis de XP.
Exemplo:

0 XP       → Estagiário
1000 XP     → Desenvolvedor Júnior
3000 XP     → Desenvolvedor Pleno
6000 XP     → Desenvolvedor Sênior
10000 XP    → Tech Lead


- Estruturas de Dados
O projeto utilizará diferentes estruturas de dados para armazenar e manipular as informações.


- Objetos
Serão utilizados para representar os personagens.

{
    nome: "Nyck",
    idade: 16,
    xp: 0,
    energia: 100,
    cargo: "Estagiário"
}


- Conceitos utilizados

utilizaçao de pastas diferentes para cada função

Variáveis

Objetos

Vetores

Matrizes

Funções

Estruturas condicionais

Estruturas de repetição

Menus

CRUD

Operações matemáticas

Manipulação de dados

Lógica de programação

Tecnologias

JavaScript

Node.js

Terminal


- Finalidade
O projeto foi desenvolvido como uma aplicação prática dos conceitos estudados em Estrutura de Dados e Lógica de Programação, utilizando um jogo de simulação de carreira como forma de aplicar os conhecimentos adquiridos.
O foco do projeto é desenvolver a lógica do jogo e demonstrar a utilização de estruturas de dados, CRUD, funções, condicionais e estruturas de repetição