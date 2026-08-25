
import leia from 'readline-sync';
import { jogador, status } from './containers/player.js';
import { trabalhar } from './functions/work.js';
import { descansar } from './functions/sleep.js';
import { loja } from './functions/buy.js';
import { cargos } from './containers/nivelXP.js';
import { cadastro } from "./database/cadastro.js";

cadastro();


let estaNoJogo = true;
console.clear();

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
   }
   else if (acao === 1) {
      trabalhar(); 
   }
   else if (acao === 2) {
      descansar();
   }
   else if(acao === 3) {
      loja();   
   }
   else if(acao === 4) {
      cargos();
   }
   else if (acao === 5) {
      console.log("Jogo encerrado.")
      estaNoJogo = false;
   }
   
}