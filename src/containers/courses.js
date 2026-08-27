import leia from 'readline-sync';
import { jogador } from './player';

export let lojaCursos = [
    {
        nivel: 1,
        nome: "Introdução à Lógica de Programação",
        preco: 29.90,
        bonusConhecimento: 2,
        tempoConclusao: 7
    },
    {
        nivel: 2,
        nome: "Bootcamp Desenvolvedor Web Front-End",
        preco: 1500.00,
        bonusConhecimento: 10,
        tempoConclusaoMs: 15
    },
    {
        nivel: 3,
        nome: "Tecnólogo em Análise e Dev. de Sistemas",
        preco: 4200.00,
        bonusConhecimento: 25,
        tempoConclusaoMs: 60
    },
    {
        nivel: 4,
        nome: "Especialização em Arquitetura de Software e Cloud",
        preco: 4800.00,
        bonusConhecimento: 50,
        tempoConclusaoMs: 180
    },
    {
        nivel: 5,
        nome: "Mestrado em Ciência da Computação e IA",
        preco: 45000.00,
        bonusConhecimento: 100,
        tempoConclusaoMs: 365
    }
];

export function adquirirCurso() {
    let cursos = leia.keyInSelect(["Introdução à Lógica de Programação", "Bootcamp Desenvolvedor Web Front-End", "Tecnólogo em Análise e Dev. de Sistemas", "Especialização em Arquitetura de Software e Cloud", "Mestrado em Ciência da Computação e IA"], "Escolha o curso: ")

    if (cursos === 0) {
        if (jogador.dinheiro >= lojaCursos[0].preco) {
        }
    }
    if (cursos === 1) {
        if (jogador.dinheiro >= lojaCursos[1].preco) {
    }
}
}