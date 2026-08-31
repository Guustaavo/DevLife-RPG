import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { atualizarCurso } from '../containers/cursos.js';

export function trabalhar() {
    if (jogador.energia >= jogador.gastoEnergia) {
        console.log("\nVoce trabalhou e ganhou: R$" + jogador.salario);
        jogador.dias = jogador.dias + 1;
        atualizarCurso();
        jogador.dinheiro = jogador.dinheiro + jogador.salario;
        jogador.energia = jogador.energia - jogador.gastoEnergia;
        jogador.xp = jogador.xp + (jogador.ganhoXp * jogador.bonusConhecimento);
    } else {
        console.log("Sem energia suficiente!");
        console.log("Descanse para poder trabalhar novamente.");
    }
}