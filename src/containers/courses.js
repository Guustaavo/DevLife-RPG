import leia from 'readline-sync';
import { jogador } from './player.js';
import { salvarJogador } from './salvarJogador.js';

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
];

export function adquirirCurso() {
    let cursos = leia.keyInSelect(["Introdução à Lógica de Programação", "Bootcamp Desenvolvedor Web Front-End", "Tecnólogo em Análise e Dev. de Sistemas", "Especialização em Arquitetura de Software e Cloud", "Mestrado em Ciência da Computação e IA"], "Escolha o curso: ")

    if (cursos === -1) {
        return;
    }

    let curso = lojaCursos[cursos];

    if (curso.nivel > jogador.formacao + 1) {
        console.log("❌ Você precisa concluir o curso anterior primeiro.");
        return;
    }

    if (curso.nivel <= jogador.formacao) {
        console.log("❌ Você já concluiu esse curso.");
        return;
    }

    if (jogador.cursoEmAndamento > 0) {
        console.log("❌ Você já está fazendo um curso.");
        return;
    }

    if (jogador.dinheiro < curso.preco) {
        console.log("❌ Saldo insuficiente!");
        return;
    }

    jogador.dinheiro -= curso.preco;
    jogador.cursoEmAndamento = curso.nivel;
    jogador.diasCurso = curso.tempoConclusao;

    console.log("📚 Curso iniciado!");
    console.log("📖 " + curso.nome);
    console.log("⏳ Duração: " + curso.tempoConclusao + " dias");

    salvarJogador(jogador);
}

export function atualizarCurso() {

    if (jogador.cursoEmAndamento > 0) {

        jogador.diasCurso--;

        console.log("📚 Curso: " + lojaCursos[jogador.cursoEmAndamento - 1].nome);
        console.log("⏳ Dias restantes: " + jogador.diasCurso);

        if (jogador.diasCurso <= 0) {

            let curso = lojaCursos[jogador.cursoEmAndamento - 1];

            jogador.formacao = curso.nivel;
            jogador.bonusConhecimento = curso.bonusConhecimento;
            jogador.cursoEmAndamento = 0;
            jogador.diasCurso = 0;

            console.log("\n🎓 CURSO CONCLUÍDO!");
            console.log("📚 Você concluiu: " + curso.nome);
            console.log("🎓 Formação atual: " + jogador.formacao);

            salvarJogador(jogador);
        }
    }
}