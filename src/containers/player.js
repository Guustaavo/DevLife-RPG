import leia from 'readline-sync';
import { lojaComputadores } from './shop.js';

export let jogador = {
    id: null,
    nome: "",
    dias: 0,
    energia: 100,
    energiaMaxima: 100,
    xp: 0,
    salario: 30,
    dinheiro: 0,
    cargo: "Freelancer",
    setup: structuredClone(lojaComputadores[0].itens),
    gastoEnergia: 15,
    formacao: 0,
    bonusConhecimento: 1,
    ganhoXp: 15,
    dataCriacao: null,
    dataAtualizacao: null
};

export function resetarJogador() {
    jogador.id = null;
    jogador.nome = "";
    jogador.dias = 0;
    jogador.energia = 100;
    jogador.energiaMaxima = 100;
    jogador.xp = 0;
    jogador.salario = 30;
    jogador.dinheiro = 0;
    jogador.cargo = "Freelancer";
    jogador.setup = structuredClone(lojaComputadores[0].itens);
    jogador.gastoEnergia = 15;
    jogador.formacao = 0;
    jogador.bonusConhecimento = 1;
    jogador.ganhoXp = 15;
    jogador.dataCriacao = null;
    jogador.dataAtualizacao = null;
}


export function carregarJogador(dados) {
    Object.assign(jogador, dados);
}


export function status() {
    console.log("\n╔══════════════════════════╗");
    console.log("║       📊 STATUS          ║");
    console.log("╚══════════════════════════╝");
    console.log("🆔 ID: " + jogador.id);
    console.log("👤 Nome: " + jogador.nome);
    console.log("⭐ XP: " + jogador.xp);
    console.log("📅 Dias: " + jogador.dias);
    console.log("💵 Salario: " + jogador.salario);
    console.log("💼 Cargo: " + jogador.cargo);
    console.log("🖥️ Setup: " + jogador.setup.pc);
    console.log("⚡ Gasto de Energia: " + jogador.gastoEnergia);
    console.log("✨ Ganho de XP: " + jogador.ganhoXp);
    console.log("🎓 Cursos: " + jogador.formacao);
    console.log("💰 Dinheiro: " + jogador.dinheiro);

    leia.keyInSelect(
        ["↩️ Voltar"],
        "Clique 1 para voltar para o menu."
    );
}