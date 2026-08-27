import { jogador } from '../containers/player.js';
import { atualizarCurso } from "../containers/courses.js";
import { salvarJogador } from "../containers/salvarJogador.js";

export async function descansar() {
    console.log("\n😴 Você descansou.");
    
    jogador.dias++;
    atualizarCurso();

    if (jogador.energia >= (jogador.energiaMaxima - jogador.gastoEnergia)) {
        jogador.energia = jogador.energiaMaxima;
    }
    else if (jogador.energia <= jogador.energiaMaxima) {
        jogador.energia += 30;
    }

    salvarJogador(jogador);
}