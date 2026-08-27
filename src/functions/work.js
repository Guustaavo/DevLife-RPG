import { jogador } from '../containers/player.js';
import { salvarJogador } from '../containers/salvarJogador.js';
import { atualizarCurso } from "../containers/courses.js";

export async function trabalhar() {

    if (jogador.energia >= jogador.gastoEnergia) {
        console.log("💼 Você trabalhou e ganhou: R$" + jogador.salario);
        jogador.dias++;
        atualizarCurso();
        jogador.dinheiro += jogador.salario;
        jogador.energia -= jogador.gastoEnergia;
        jogador.xp += (jogador.ganhoXp * jogador.bonusConhecimento);
        salvarJogador(jogador);
    }
    else {
        console.log("❌ Sem energia o suficiente!");
        console.log("😴 Descanse para poder trabalhar novamente.");
    }
}