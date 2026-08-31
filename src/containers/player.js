import leia from 'readline-sync';
import { computadores } from './computadores.js';

export let jogador = {
    nome: "",
    dias: 0,
    energia: 100,
    energiaMaxima: 100,
    xp: 0,
    salario: 100,
    dinheiro: 0,
    cargo: "Freelancer",
    setup: computadores[0].itens,
    gastoEnergia: 15,
    formacao: 0,
    cursoEmAndamento: 0,
    diasCurso: 0,
    bonusConhecimento: 1,
    ganhoXp: 15,
}