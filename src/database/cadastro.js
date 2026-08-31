import leia from "readline-sync";

import { jogador } from "../containers/player.js";
import { salvarJogador } from "./salvarJogador.js";

export function cadastro() {
    console.log("\n==============================");
    console.log("       NOVA CARREIRA");
    console.log("==============================");

    const nome = leia.question("\nDigite o nome do jogador: ").trim();

    if (!nome) {
        console.log("\n❌ Nome inválido. Tente novamente.");
        return false;
    }

    jogador.nome = nome;
    salvarJogador(jogador);

    console.log("\n✅ Carreira criada com sucesso!");
    console.log("Seu ID de carreira é: " + jogador.id);
    console.log("\n⚠️ GUARDE ESSE ID!");
    console.log("Você precisará dele para continuar sua carreira.");

    leia.keyInSelect(["Continuar"], "\nPressione Enter para começar sua vida.");
    return true;
}