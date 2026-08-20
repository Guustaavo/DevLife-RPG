import leia from "readline-sync";
import { jogador } from "./player.js";

export function trabalhar() {
    let trabalhar = leia.keyInSelect(["Sim", "Nao"], "Você deseja trabalhar?");

    if (trabalhar === 0 && jogador.energia > jogador.gastoEnergia) {
        console.log("Você trabalhou e ganhou: R$" + jogador.salario);
        jogador.dias++;
        jogador.dinheiro += jogador.salario;
        jogador.energia -= jogador.gastoEnergia;
    }
    else if (trabalhar === 0 && jogador.energia < jogador.gastoEnergia) {
        console.log("sem energia o suficiente!");
    }
    else {
        console.log("Você não trabalhou!");
    }
}