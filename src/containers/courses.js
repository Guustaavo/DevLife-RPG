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
        preco: 30000.00,
        bonusConhecimento: 7,
        tempoConclusao: 20,
        cursoCompleto: false
    }
];

export function adquirirCurso() {
    let cursos = leia.keyInSelect(["Introdução à Lógica de Programação", "Bootcamp Desenvolvedor Web Front-End", "Tecnólogo em Análise e Dev. de Sistemas", "Especialização em Arquitetura de Software e Cloud", "Mestrado em Ciência da Computação e IA"], "Escolha o curso: ")

    if (cursos === 0) {
        if (jogador.dinheiro >= lojaCursos[0].preco && jogador.formacao < lojaCursos[0].nivel) {
            jogador.dinheiro -= lojaCursos[0].preco;
            jogador.cursoEmAndamento = lojaCursos[0].nivel;
            jogador.diasCurso = lojaCursos[0].tempoConclusao;
            console.log("📚 Curso iniciado!");
            console.log("⏳ Duração: " + lojaCursos[0].tempoConclusao + " dias");
            salvarJogador(jogador);
        }
    }

    if (cursos === 1) {
        if (jogador.dinheiro >= lojaCursos[1].preco && jogador.formacao < lojaCursos[1].nivel) {
            jogador.dinheiro -= lojaCursos[1].preco;
            jogador.cursoEmAndamento = lojaCursos[1].nivel;
            jogador.diasCurso = lojaCursos[1].tempoConclusao;
            console.log("📚 Curso iniciado!");
            console.log("⏳ Duração: " + lojaCursos[1].tempoConclusao + " dias");
            salvarJogador(jogador);
        }
    }

    if (cursos === 2) {
        if (jogador.dinheiro >= lojaCursos[2].preco && jogador.formacao < lojaCursos[2].nivel) {
            jogador.dinheiro -= lojaCursos[2].preco;
            jogador.cursoEmAndamento = lojaCursos[2].nivel;
            jogador.diasCurso = lojaCursos[2].tempoConclusao;
            console.log("📚 Curso iniciado!");
            console.log("⏳ Duração: " + lojaCursos[2].tempoConclusao + " dias");
            salvarJogador(jogador);
        }
    }

    if (cursos === 3) {
        if (jogador.dinheiro >= lojaCursos[3].preco && jogador.formacao < lojaCursos[3].nivel) {
            jogador.dinheiro -= lojaCursos[3].preco;
            jogador.cursoEmAndamento = lojaCursos[3].nivel;
            jogador.diasCurso = lojaCursos[3].tempoConclusao;
            console.log("📚 Curso iniciado!");
            console.log("⏳ Duração: " + lojaCursos[3].tempoConclusao + " dias");
            salvarJogador(jogador);
        }
    }

    if (cursos === 4) {
        if (jogador.dinheiro >= lojaCursos[4].preco && jogador.formacao < lojaCursos[4].nivel) {
            jogador.dinheiro -= lojaCursos[4].preco;
            jogador.cursoEmAndamento = lojaCursos[4].nivel;
            jogador.diasCurso = lojaCursos[4].tempoConclusao;
            console.log("📚 Curso iniciado!");
            console.log("⏳ Duração: " + lojaCursos[4].tempoConclusao + " dias");
            salvarJogador(jogador);
        }
    }
}

export function atualizarCurso() {

    if (jogador.cursoEmAndamento > 0) {

        jogador.diasCurso--;

        console.log("📚 Curso: " + jogador.cursoEmAndamento);
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