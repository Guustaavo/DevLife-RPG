import leia from 'readline-sync';
import { lojaComputadores } from './shop.js';

export let jogador = {
    nome: "",
    dias: 0,
    energia: 100,
    energiaMaxima: 100,
    xp: 0,
    salario: 30,
    dinheiro: 0,
    cargo: "Freelancer",
    setup: lojaComputadores[0].itens,
    gastoEnergia: 15,
    formacao: 0,
    bonusConhecimento: 1,
    ganhoXp: 15,
}

export function status() {
    console.log("\nXP: " + jogador.xp);
    console.log("Dias: " + jogador.dias);
    console.log("Salario: " + jogador.salario);
    console.log("Cargo: " + jogador.cargo);
    console.log("Setup: " + jogador.setup.pc);
    console.log("Gasto de Energia: " + jogador.gastoEnergia);
    console.log("Ganho de XP: " + jogador.ganhoXp);
    console.log("Cursos: " + jogador.formacao);

    let retornar = leia.keyInSelect(["Voltar"],"Clique 1 para voltar para o menu. ");

}