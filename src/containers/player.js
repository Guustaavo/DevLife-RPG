import leia from 'readline-sync';
import { lojaComputadores } from './shop.js';

export let jogador = {
    nome: "",
    dias: 0,
    energia: 100,
    xp: 0,
    salario: 100,
    dinheiro: 0,
    cargo: "Freelancer",
    setup: {
        nivel: 1,
        pc: "Positivo da Positivo rodando Windows XP",
        teclado: "Teclado da Xuxa",
        mouse: "Mouse da Barbie",
        fone: "Fone My Little Pony",
        cadeira: "Cadeira de plástico amarela da Skol",
    },
    gastoEnergia: 15,
    formacao: "Sem Formação",
    ganhoXp: 15
}

export function status() {
    console.log("\nxp: " + jogador.xp);
    console.log("dias: " + jogador.dias);
    console.log("salario: " + jogador.salario);
    console.log("cargo: " + jogador.cargo);
    console.log("setup: " + jogador.setup);
    console.log("gasto de energia: " + jogador.gastoEnergia);

    let retornar = leia.keyInSelect(["Voltar"],"clique 0 para voltar para o menu")

}