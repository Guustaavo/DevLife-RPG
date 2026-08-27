import leia from 'readline-sync';
import { jogador } from "./player.js";

export let lojaCursos = [
    {
        nivel: 1,
        nome: "Introdução à Lógica de Programação",
        preco: 500.00,
        bonusConhecimento: 1.5,
        tempoConclusao: 7
    },
    {
        nivel: 2,
        nome: "Bootcamp Desenvolvedor Web Front-End",
        preco: 1500.00,
        bonusConhecimento: 2,
        tempoConclusao: 15
    },
    {
        nivel: 3,
        nome: "Tecnólogo em Análise e Dev. de Sistemas",
        preco: 7500.00,
        bonusConhecimento: 3,
        tempoConclusao: 60
    },
    {
        nivel: 4,
        nome: "Especialização em Arquitetura de Software e Cloud",
        preco: 15000.00,
        bonusConhecimento: 5,
        tempoConclusao: 180
    },
    {
        nivel: 5,
        nome: "Mestrado em Ciência da Computação e IA",
        preco: 45000.00,
        bonusConhecimento: 7,
        tempoConclusao: 365
    }
];

export function adquirirCurso() {
    let cursos = leia.keyInSelect(["Introdução à Lógica de Programação", "Bootcamp Desenvolvedor Web Front-End", "Tecnólogo em Análise e Dev. de Sistemas", "Especialização em Arquitetura de Software e Cloud", "Mestrado em Ciência da Computação e IA"], "Escolha o curso: ")

    if (cursos === 0) {
        if (jogador.dinheiro >= lojaCursos[0].preco && jogador.formacao < lojaCursos[0].nivel) {
            jogador.formacao = lojaCursos[0].nivel;
            jogador.bonusConhecimento = lojaCursos[0].bonusConhecimento;
        }
    }
    if (cursos === 1) {
        if (jogador.dinheiro >= lojaCursos[1].preco && jogador.formacao < lojaCursos[1].nivel) {
            jogador.formacao = lojaCursos[1].nivel;
            jogador.bonusConhecimento = lojaCursos[1].bonusConhecimento;
        }
    }
    if (cursos === 2) {
        if (jogador.dinheiro >= lojaCursos[2].preco && jogador.formacao < lojaCursos[2].nivel) {
            jogador.formacao = lojaCursos[2].nivel;
            jogador.bonusConhecimento = lojaCursos[2].bonusConhecimento;
        }
    }
    if (cursos === 3) {
        if (jogador.dinheiro >= lojaCursos[3].preco && jogador.formacao < lojaCursos[3].nivel) {
            jogador.formacao = lojaCursos[3].nivel;
            jogador.bonusConhecimento = lojaCursos[3].bonusConhecimento;
        }
    }
    if (cursos === 4) {
        if (jogador.dinheiro >= lojaCursos[4].preco && jogador.formacao < lojaCursos[4].nivel) {
            jogador.formacao = lojaCursos[4].nivel;
            jogador.bonusConhecimento = lojaCursos[4].bonusConhecimento;
        }
    }
}