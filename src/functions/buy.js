import leia from 'readline-sync';
import chalk from 'chalk';
import { jogador } from '../containers/player.js';
import { lojaComputadores } from '../containers/shop.js';
import { lojaCursos } from '../containers/courses.js';
import { menuSeta } from './menuSeta.js';

async function comprarComputador(item) {
    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.setup = item.itens;

        console.log(chalk.green(`\n✅ Voce comprou "${item.nome}"! Saldo restante: R$${jogador.dinheiro}`));
    } else {
        console.log(chalk.red(`\n❌ Saldo insuficiente! Voce tem R$${jogador.dinheiro}, precisa de R$${item.preco}.`));
    }
}

async function comprarCurso(item) {
    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.formacao = item.nome;

        console.log(chalk.green(`\n✅ Voce comprou o curso "${item.nome}"! Saldo restante: R$${jogador.dinheiro}`));
    } else {
        console.log(chalk.red(`\n❌ Saldo insuficiente! Voce tem R$${jogador.dinheiro}, precisa de R$${item.preco}.`));
    }
}

async function comprarItem(lista, tipo) {
    const opcoes = lista.map(item => `${item.nome} - R$${item.preco}`);

    let escolha = await menuSeta(
        `🛒 Qual ${tipo} voce quer comprar?`,
        opcoes
    );

    if (escolha === -1) {
        console.log("Compra cancelada.");
        return;
    }

    const item = lista[escolha];

    if (tipo === "computador") {
        await comprarComputador(item);
    } else {
        await comprarCurso(item);
    }

    leia.keyInSelect(["↩️ Voltar"], "Pressione para voltar.");
}

export async function loja() {

    let verLoja = await menuSeta(
        "🛒 O que voce quer ver?",
        [
            "💻 Computadores",
            "📚 Cursos"
        ]
    );

    if (verLoja === 0) {

        let header = "\n=======================\n";
        header += "       💻 COMPUTADORES\n";
        header += "=======================\n";
        header += "\n💰 Seu saldo: R$" + jogador.dinheiro;
        header += "\n🖥️ Setup atual: " + jogador.setup.pc;

        let comprar = await menuSeta(
            "🛒 Escolha uma opcao:",
            [
                "🛍️ Comprar computador",
                "↩️ Voltar"
            ],
            header
        );

        if (comprar === 0) {
            await comprarItem(lojaComputadores, "computador");
        }

    }

    else if (verLoja === 1) {

        let header = "\n=======================\n";
        header += "          📚 CURSOS\n";
        header += "=======================\n";
        header += "\n💰 Seu saldo: R$" + jogador.dinheiro;
        header += "\n🎓 Formacao atual: " + jogador.formacao;

        let comprar = await menuSeta(
            "📚 Escolha uma opcao:",
            [
                "🛍️ Comprar curso",
                "↩️ Voltar"
            ],
            header
        );

        if (comprar === 0) {
            await comprarItem(lojaCursos, "curso");
        }

    }
}