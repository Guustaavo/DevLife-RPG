import fs from "fs";
import leia from "readline-sync";

import { carregarJogador } from "../containers/player.js";

const caminho = "./src/database/jogadores.json";

export function login() {

    console.log("\n==============================");
    console.log("           LOGIN");
    console.log("==============================");

    if (!fs.existsSync(caminho)) {
        console.log("\n❌ Nenhuma carreira encontrada.");
        return false;
    }

    const dados = fs.readFileSync(caminho, "utf-8");

    if (dados.trim() === "") {
        console.log("\n❌ Nenhuma carreira encontrada.");
        return false;
    }

    const jogadores = JSON.parse(dados);

    if (jogadores.length === 0) {
        console.log("\n❌ Nenhuma carreira cadastrada.");
        return false;
    }

    const id = leia.questionInt(
        "\nDigite o ID da sua carreira: "
    );

    const jogadorEncontrado = jogadores.find(
        jogador => jogador.id === id
    );

    if (!jogadorEncontrado) {
        console.log("\n❌ ID não encontrado!");
        return false;
    }

    carregarJogador(jogadorEncontrado);

    console.log("\n✅ Login realizado com sucesso!");
    console.log("Bem-vindo de volta, " + jogadorEncontrado.nome + "!");
    console.log("Dias: " + jogadorEncontrado.dias);
    console.log("XP: " + jogadorEncontrado.xp);
    console.log("Dinheiro: R$" + jogadorEncontrado.dinheiro);

    leia.keyInSelect(
        ["Continuar"],
        "\nClique 1 para continuar sua carreira."
    );

    return true;
}