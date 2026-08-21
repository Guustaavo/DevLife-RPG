import leia from 'readline-sync';
import { itens } from './shop.js';

export let jogador = {
    nome: undefined,
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
    gastoEnergia: 35,
}

export function status() {
    console.log("\nxp: " + jogador.salario);
    console.log("dias: " + jogador.dias);
    console.log("salario: " + jogador.salario);
    console.log("cargo: " + jogador.cargo);
    console.log("setup: " + jogador.setup);
    console.log("gasto de energia: " + jogador.gastoEnergia);
}