import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { atualizarCurso } from '../containers/cursos.js';

export function descansar() {
    console.log("\nVoce descansou.");
    jogador.dias = jogador.dias + 1;
    atualizarCurso();

    if (jogador.energia >= (jogador.energiaMaxima - jogador.gastoEnergia)) {
        jogador.energia = jogador.energiaMaxima;
    } else if (jogador.energia <= jogador.energiaMaxima) {
        jogador.energia = jogador.energia + 30;
    }
}