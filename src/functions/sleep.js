import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { cargos, Niveis } from '../containers/nivelXP.js';
import { atualizarCurso } from "../containers/courses.js";


export function descansar() {
    let descansar = leia.keyInSelect(["\nSim", "Nao"], "Você deseja descansar?");

    if (descansar === 0) {
        console.log("Você descansou.");
        jogador.dias++;
        atualizarCurso();
        if (jogador.energia >= (jogador.energiaMaxima - jogador.gastoEnergia)) {
            jogador.energia = jogador.energiaMaxima;
        }
        else if (jogador.energia <= jogador.energiaMaxima) {
            jogador.energia += 30;
        }
    } else {
        console.log("Você não descansou.");
    }
}