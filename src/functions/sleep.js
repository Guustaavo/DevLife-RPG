import leia from 'readline-sync';
import { jogador } from './player.js';

export function descansar() {
    let descansar = leia.keyInSelect(["Sim", "Nao"], "Você deseja descansar?");

    if (descansar === 0) {
        jogador.dias++;
        console.log("Você descansou.")
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