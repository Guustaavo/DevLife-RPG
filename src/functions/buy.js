import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { computadores, itens, lojaComputadores } from '../containers/shop.js';

export function loja() {
    let verLoja = leia.keyInSelect(["\nComputadores", "Cursos"], "Selecione o que voce quer ver: ");

    if (verLoja === 0) {
        console.log("\n=======================");
        console.log("      COMPUTADORES       ");
        console.log("=======================");

        console.log("\nPC's vendendo:");

        lojaComputadores.forEach((item, index) => {
            console.log(`\n${index + 1}. ${item.nome} - R$${item.preco}`);
        });
    }
    else if (verLoja === 1) {
        console.log("\n=======================");
        console.log("         CURSOS          ");
        console.log("=======================");

        console.log("\nCursos vendendo:");

        lojaCursos.forEach((item, index) => {
            console.log(`\n${index + 1}. ${item.nome} - R$${item.preco}`);
        });
    }
    else {
        console.log("Voce nao viu a loja.")
    }
}
