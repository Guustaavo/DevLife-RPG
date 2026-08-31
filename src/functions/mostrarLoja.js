import leia from 'readline-sync';
import { computadores } from '../containers/computadores.js';
import { lojaCursos } from '../containers/cursos.js';
import { comprarComputador } from './comprarPc.js';
import { comprarCurso } from './comprarCurso.js';

export function mostrarLoja() {
    console.log("\n===== LOJA =====");
    console.log("1 - Comprar computador");
    console.log("2 - Comprar curso");
    console.log("3 - Voltar");

    var escolha = leia.questionInt("Escolha uma opcao: ");

    if (escolha === 1) {
        console.log("\nComputadores disponiveis:");
        computadores.forEach(function (item, indice) {
            console.log((indice + 1) + ". " + item.nome + " - R$" + item.preco);
        });

        var escolhaPc = leia.questionInt("Escolha o computador: ");

        if (escolhaPc >= 1 && escolhaPc <= computadores.length) {
            comprarComputador(computadores[escolhaPc - 1]);
        } else {
            console.log("Opcao invalida.");
        }
    } else if (escolha === 2) {
        console.log("\nCursos disponiveis:");
        lojaCursos.forEach(function (item, indice) {
            console.log((indice + 1) + ". " + item.nome + " - R$" + item.preco);
        });

        var escolhaCurso = leia.questionInt("Escolha o curso: ");

        if (escolhaCurso >= 1 && escolhaCurso <= lojaCursos.length) {
            comprarCurso(lojaCursos[escolhaCurso - 1]);
        } else {
            console.log("Opcao invalida.");
        }
    } else if (escolha === 3) {
        console.log("Voltando ao menu...");
    } else {
        console.log("Opcao invalida.");
    }
}