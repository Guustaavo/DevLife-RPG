import leia from 'readline-sync';

export let jogador = {
    nome: undefined,
    dias: 0,
    energia: 100,
    xp: 0,
    salario: 100,
    dinheiro: 0,
    cargo: "Freelancer",
    setup: "Notebook Windows 8",
    gastoEnergia: 20,
}

export function status() {
    console.log("xp: " + jogador.salario);
    console.log("dias: " + jogador.dias);
    console.log("salario: " + jogador.salario);
    console.log("cargo: " + jogador.cargo);
    console.log("setup: " + jogador.setup);
    console.log("gasto de energia: " + jogador.gastoEnergia);
}