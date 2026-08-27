import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { cargos } from '../containers/nivelXP.js';


export function descansar() {
    let descansar = leia.keyInSelect(["\nSim", "Nao"], "Você deseja descansar?");

    if (descansar === 0) {
        console.log("Você descansou.");
        jogador.dias++;
        if (jogador.energia >= 71) {
            jogador.energia = 100;
        }
        else if (jogador.energia <= 70) {
            jogador.energia += 30;
        }
    } else {
        console.log("Você não descansou.");
    }
}