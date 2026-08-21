import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { itens } from '../containers/shop.js';

export function loja() {
    let ver = leia.keyInSelect(["\nSim", "Nao"], "Você deseja ver a loja?");

    console.log("\n=======================");
    console.log("         LOJA          ");
    console.log("=======================");

    console.log("\nPC's vendendo:");
    
    itens.forEach((item, index) => {
        console.log(`\n${index + 1}. ${item.nome} - R$${item.preco}`);
    });

    
}