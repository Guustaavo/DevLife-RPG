import leia from 'readline-sync';
import { jogador, status } from './containers/player.js';
import { trabalhar } from './functions/work.js';
import { descansar } from './functions/sleep.js';
import { loja } from './functions/buy.js';

let estaNoJogo = true;
let nome = leia.question("Digite o nome do jogador: ");
jogador.nome = nome;
console.clear("");

while (estaNoJogo === true) {
   console.clear("");
   console.log("\n=======================");
   console.log("  Dev. Life Game RPG  ");
   console.log("=======================");


   console.log("\nJogador: " + jogador.nome);
   console.log("Energia: " + jogador.energia);
   console.log("Dinheiro: " + jogador.dinheiro);

   let acao = leia.keyInSelect(["\nVer status", "Trabalhar", "Descansar", "Ver loja", "Encerrar jogo"], "Selecione o que voce deseja fazer: ");
   if (acao === 0) {
      status();
      let retornar = leia.keyInSelect(["\nRetornar"], "Clique para retornar ao menu inicial.");
   }
   else if (acao === 1) {
      trabalhar();
      let retornar = leia.keyInSelect(["\nRetornar"], "Clique para retornar ao menu inicial.");
   }
   else if (acao === 2) {
      descansar();
      let retornar = leia.keyInSelect(["\nRetornar"], "Clique para retornar ao menu inicial.");
   }
   else if(acao === 3) {
      loja();
      let retornar = leia.keyInSelect(["\nRetornar"], "Clique para retornar ao menu inicial.");
   }
   else if (acao === 4) {
      console.log("Jogo encerrado.")
      estaNoJogo = false;
   }
}