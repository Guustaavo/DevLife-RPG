import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { lojaComputadores } from '../containers/shop.js';
import { lojaCursos } from '../containers/courses.js';

function comprarComputador(item) {
    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.setup = item.itens;

        console.log(`\n✅ Voce comprou "${item.nome}"! Saldo restante: R$${jogador.dinheiro}`);
    } else {
        console.log(`\n❌ Saldo insuficiente! Voce tem R$${jogador.dinheiro}, precisa de R$${item.preco}.`);
    }
}

function comprarCurso(item) {
    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.formacao = item.nome;

        console.log(`\n✅ Voce comprou o curso "${item.nome}"! Saldo restante: R$${jogador.dinheiro}`);
    } else {
        console.log(`\n❌ Saldo insuficiente! Voce tem R$${jogador.dinheiro}, precisa de R$${item.preco}.`);
    }
}

function comprarItem(lista, tipo) {
    const opcoes = lista.map(item => `${item.nome} - R$${item.preco}`);
    let escolha = leia.keyInSelect(opcoes, `Qual ${tipo} voce quer comprar?`);

    if (escolha === -1) {
        console.log("Compra cancelada.");
        return;
    }

    const item = lista[escolha];

    if (tipo === "computador") {
        comprarComputador(item);
    } else {
        comprarCurso(item);
    }
}

export function loja() {
    let verLoja = leia.keyInSelect(["\nComputadores", "Cursos"], "Selecione o que voce quer ver: ");

    if (verLoja === 0) {
        console.log("\n=======================");
        console.log("      COMPUTADORES       ");
        console.log("=======================");
        console.log(`\nSeu saldo: R$${jogador.dinheiro}`);
        console.log(`Setup atual: ${jogador.setup.pc}`);
        console.log("\nPC's vendendo:");

        lojaComputadores.forEach((item, index) => {
            console.log(`\n${index + 1}. ${item.nome} - R$${item.preco}`);
        });

        console.log("\nDESEJA COMPRAR ALGUM COMPUTADOR?")
        let comprar = leia.keyInSelect(["Sim", "Nao"]);
        if (comprar === 0) {
            comprarItem(lojaComputadores, "computador");
        }

        let retornar = leia.keyInSelect(["Sim", "Nao"], "Deseja retornar ao menu principal?")
        if (retornar === 1) {
            loja();
        }
    }
    else if (verLoja === 1) {
        console.log("\n=======================");
        console.log("         CURSOS          ");
        console.log("=======================");
        console.log(`\nSeu saldo: R$${jogador.dinheiro}`);
        console.log(`Formacao atual: ${jogador.formacao}`);
        console.log("\nCursos vendendo:");

        lojaCursos.forEach((item, index) => {
            console.log(`\n${index + 1}. ${item.nome} - R$${item.preco}`);
        });

        console.log("\nDESEJA COMPRAR ALGUM CURSO?")
        let comprar = leia.keyInSelect(["Sim", "Nao"]);
        if (comprar === 0) {
            comprarItem(lojaCursos, "curso");
        }

        let retornar = leia.keyInSelect(["Sim", "Nao"], "Deseja retornar ao menu principal?")
        if (retornar === 1) {
            loja();
        }
    }
    else {
        console.log("Voce nao viu a loja.")
    }
}