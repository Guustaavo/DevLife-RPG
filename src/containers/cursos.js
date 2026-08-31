import leia from 'readline-sync';
import { jogador } from './player.js';

export let lojaCursos = [
    {
        nivel: 1,
        nome: "Introdução à Lógica de Programação",
        preco: 500.00,
        bonusConhecimento: 1.5,
        tempoConclusao: 3,
        cursoCompleto: false
    },
    {
        nivel: 2,
        nome: "Bootcamp Desenvolvedor Web Front-End",
        preco: 1500.00,
        bonusConhecimento: 2,
        tempoConclusao: 5,
        cursoCompleto: false
    },
    {
        nivel: 3,
        nome: "Tecnólogo em Análise e Dev. de Sistemas",
        preco: 7500.00,
        bonusConhecimento: 3,
        tempoConclusao: 10,
        cursoCompleto: false
    },
    {
        nivel: 4,
        nome: "Especialização em Arquitetura de Software e Cloud",
        preco: 15000.00,
        bonusConhecimento: 5,
        tempoConclusao: 15,
        cursoCompleto: false
    },
    {
        nivel: 5,
        nome: "Mestrado em Ciência da Computação e IA",
        preco: 45000.00,
        bonusConhecimento: 7,
        tempoConclusao: 20,
        cursoCompleto: false
    }
]

export function atualizarCurso() {
    if (jogador.cursoEmAndamento > 0) {
        jogador.diasCurso = jogador.diasCurso - 1;

        console.log("Curso: " + lojaCursos[jogador.cursoEmAndamento - 1].nome);
        console.log("Dias restantes: " + jogador.diasCurso);

        if (jogador.diasCurso <= 0) {
            var curso = lojaCursos[jogador.cursoEmAndamento - 1];
            jogador.formacao = curso.nivel;
            jogador.bonusConhecimento = curso.bonusConhecimento;
            jogador.cursoEmAndamento = 0;
            jogador.diasCurso = 0;

            console.log("\nCURSO CONCLUIDO!");
            console.log("Voce concluiu: " + curso.nome);
            console.log("Sua formacao atual agora e: " + jogador.formacao);
        }
    }
}