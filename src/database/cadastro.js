import leia from "readline-sync";

import { jogador } from "../containers/player.js";
import { salvarJogador } from "../containers/salvarJogador.js";

export function cadastro() {

    

    console.log("\n==============================");
    console.log("       NOVA CARREIRA");
    console.log("==============================");

    jogador.nome = leia.question(
        "\nDigite o nome do jogador: "
    );

    salvarJogador(jogador);

    console.log("\n✅ Carreira criada com sucesso!");
    console.log("Seu ID de carreira é: " + jogador.id);
    console.log("\n⚠️ GUARDE ESSE ID!");
    console.log("Você precisará dele para continuar sua carreira.");

    leia.keyInSelect(
        ["Continuar"],
        "\nClique 1 para começar sua vida."
    );
}