import leia from 'readline-sync';
import { jogador } from '../containers/player.js';

export function status() {
    console.log("\nXP: " + jogador.xp);
    console.log("Dias: " + jogador.dias);
    console.log("Salario: " + jogador.salario);
    console.log("Cargo: " + jogador.cargo);
    console.log("Setup: " + jogador.setup.pc);
    console.log("Gasto de Energia: " + jogador.gastoEnergia);
    console.log("Ganho de XP: " + jogador.ganhoXp);
    console.log("Cursos: " + jogador.formacao);
}