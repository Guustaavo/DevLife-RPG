import leia from 'readline-sync';
import { jogador, status } from './functions/player';

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
   
}