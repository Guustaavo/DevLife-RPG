import { jogador } from "../containers/player.js";
import { cargos } from "../containers/nivelXP.js";
import { salvarJogador } from "../containers/salvarJogador.js";
import { menuSeta } from "./menuSeta.js";


export async function trabalhar() {
    let trabalhar = await menuSeta(
        "💼 Você deseja trabalhar?",
        ["Sim", "Não"]
    );

    if (trabalhar === 0 && jogador.energia >= jogador.gastoEnergia) {
        console.log("Você trabalhou e ganhou: R$" + jogador.salario);
        jogador.dias++;
        jogador.dinheiro += jogador.salario;
        jogador.energia -= jogador.gastoEnergia;
        jogador.xp += (jogador.ganhoXp * jogador.bonusConhecimento)
        salvarJogador(jogador);
    }
    else if (trabalhar === 0 && jogador.energia < jogador.gastoEnergia) {
        console.log("Sem energia o suficiente!");
        console.log("Descanse para poder trabalhar novamente.");
    }
    else {
        console.log("Você não trabalhou!");
    }
}