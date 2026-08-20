import leia from 'readline-sync';
import { jogador } from './player';

export function descansar() {
    let descansar = keyInSelect(["Sim", "Nao"]);

    if(descansar === 0){
        jogador.acoesPerDia = 3;
        jogador.dias++;
        jogador.energia += 30;
    }
}