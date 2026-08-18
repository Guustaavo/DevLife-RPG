import leia from "readline-sync";
import { jogador } from "./player.js";

export function trabalhar() {
    let trabalhar = keyInSelect(["sim", "nao"]);

    if (trabalhar === 0 && jogador.energia > jogador.gastoEnergia) {
        console.log("Você trabalhou e ganhou: R$" + jogador.salario)
        jogador.dias++;
        jogador.dinheiro += jogador.salario
        jogador.energia -= jogador.gastoEnergia
    }
    else{
        console.log("sem energia o suficiente!")
    }
}