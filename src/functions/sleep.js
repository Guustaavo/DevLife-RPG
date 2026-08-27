import { jogador } from '../containers/player.js';
import { cargos, Niveis } from '../containers/nivelXP.js';
import { salvarJogador } from "../containers/salvarJogador.js";
import { menuSeta } from "./menuSeta.js";


export async function descansar() {
    let descansar = await menuSeta(
        "😴 Você deseja descansar?",
        ["Sim", "Não"]
    );

    if (descansar === 0) {
        console.log("Você descansou.");
        jogador.dias++;
        if (jogador.energia >= (jogador.energiaMaxima - jogador.gastoEnergia)) {
            jogador.energia = jogador.energiaMaxima;
        }
        else if (jogador.energia <= jogador.energiaMaxima) {
            jogador.energia += 30;
        }
        salvarJogador(jogador);
    } else {
        console.log("Você não descansou.");
    }
}