
import leia from "readline-sync";
import { jogador } from "../containers/player.js";
import { salvarJogador } from "../containers/salvarJogador.js";

export function cadastro() {
    jogador.nome = leia.question("Digite o nome do jogador: ");

    salvarJogador(jogador);
}