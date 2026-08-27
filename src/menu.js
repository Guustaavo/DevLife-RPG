import leia from 'readline-sync';
import { jogador, status } from './containers/player.js';
import { trabalhar } from './functions/work.js';
import { descansar } from './functions/sleep.js';
import { loja } from './functions/buy.js';
import { cargos } from './containers/nivelXP.js';
import { cadastro } from "./database/cadastro.js";
import { login } from "./database/login.js";
import { menuSeta } from "./functions/menuSeta.js";


let entrada = await menuSeta(
    "🎮 Dev. Life Game RPG",
    [
        "📝 Cadastrar",
        "🔑 Login",
        "🚪 Sair"
    ]
);


if (entrada === 0) {
    cadastro();
}
else if (entrada === 1) {
    const entrou = login();

    if (!entrou) {
        process.exit();
    }
}
else {
    console.log("Jogo encerrado.");
    process.exit();
}


let estaNoJogo = true;

while (estaNoJogo === true) {

    let header = "\n=======================\n";
    header += "  🎮 Dev. Life Game RPG  \n";
    header += "=======================\n";
    header += "\n👤 Jogador: " + jogador.nome;
    header += "\n⚡ Energia: " + jogador.energia;
    header += "\n💰 Dinheiro: " + jogador.dinheiro;
    header += "\n📅 Dias: " + jogador.dias;
    header += "\n⭐ XP: " + jogador.xp;
    header += "\n💼 Cargo: " + jogador.cargo;

    let acao = await menuSeta(
        "Selecione o que voce deseja fazer:",
        [
            "📊 Ver status",
            "💼 Trabalhar",
            "😴 Descansar",
            "🛒 Ver loja",
            "📈 Ver cargos",
            "🚪 Encerrar jogo"
        ],
        header
    );


    if (acao === 0) {
        status();
    }

    else if (acao === 1) {
        await trabalhar();
    }

    else if (acao === 2) {
        await descansar();
    }

    else if (acao === 3) {
        await loja();
    }

    else if (acao === 4) {
        await cargos();
        let retornar = leia.keyInSelect(["Retornar"], "Deseja retornar ao menu principal?");
    }

    else if (acao === 5 || acao === -1) {
        console.log("Jogo encerrado.");
        estaNoJogo = false;
    }

}