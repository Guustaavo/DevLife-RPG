import leia from 'readline-sync';
import { jogador, status } from './functions/player.js';
import { trabalhar } from './functions/work.js';
import { descansar } from './functions/sleep.js';

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

   let acao = leia.keyInSelect(["\nVer status", "Trabalhar", "Descansar", "Encerrar jogo"], "Selecione o que voce deseja fazer: ");
   if (acao === 0) {
      status();
      let retornar = leia.keyInSelect(["Retornar"], "Clique para retornar ao menu inicial.");
   }
   else if (acao === 1) {
      trabalhar();
      let retornar = leia.keyInSelect(["Retornar"], "Clique para retornar ao menu inicial.");
   }
   else if (acao === 2) {
      descansar();
      let retornar = leia.keyInSelect(["Retornar"], "Clique para retornar ao menu inicial.");
   }
   else if (acao === 3) {
      console.log("Jogo encerrado.")
      estaNoJogo = false;
   }
}