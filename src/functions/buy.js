import leia from 'readline-sync';
import chalk from 'chalk';
import { jogador } from '../containers/player.js';
import { lojaComputadores } from '../containers/shop.js';
import { lojaCursos } from '../containers/courses.js';
import { menuSeta } from './menuSeta.js';
import { salvarJogador } from '../containers/salvarJogador.js';

async function comprarComputador(item) {
    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.setup = item.itens;

        console.log(chalk.green(`\n✅ Voce comprou "${item.nome}"! Saldo restante: R$${jogador.dinheiro}`));
        salvarJogador(jogador);
    } else {
        console.log(chalk.red(`\n❌ Saldo insuficiente! Voce tem R$${jogador.dinheiro}, precisa de R$${item.preco}.`));
    }
}

async function comprarCurso(item) {
    if (jogador.cursoEmAndamento > 0) {
        console.log(chalk.red("\n❌ Você já está fazendo um curso!"));
        return;
    }

    if (item.nivel > jogador.formacao + 1) {
        console.log(chalk.red("\n❌ Você precisa concluir o curso anterior primeiro!"));
        return;
    }

    if (item.nivel <= jogador.formacao) {
        console.log(chalk.red("\n❌ Você já concluiu esse curso!"));
        return;
    }

    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.cursoEmAndamento = item.nivel;
        jogador.diasCurso = item.tempoConclusao;

        console.log(chalk.green(`\n📚 Curso iniciado: "${item.nome}"!`));
        console.log(chalk.yellow(`⏳ Duração: ${item.tempoConclusao} dias`));
        console.log(chalk.green(`💰 Saldo restante: R$${jogador.dinheiro}`));

        salvarJogador(jogador);
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