import leia from 'readline-sync';
import { jogador, status } from './functions/player.js';
import { trabalhar } from './functions/work.js';
import { descansar } from './functions/sleep.js';

let estaNoJogo = true;
let nome = leia.question("Digite o nome do jogador: ");
console.clear("");

console.log("=======================");
console.log("  Dev. Life Game RPG  ");
console.log("=======================");



while(estaNoJogo === true){
   console.log("\nnome: " + jogador.nome)
   console.log("energia: " + jogador.energia)
   console.log("dinheiro: " + jogador.dinheiro)
   
   let opcao = leia.keyInSelect(["trabalhar","descansar"],"escolha sua proxima ação:")

   if(opcao === 0){
      trabalhar()
   }
   else if(opcao === 1){
      descansar()
   }
}