import fs from "fs";
import leia from "readline-sync";

import { jogador } from "../containers/player.js";

const caminho = "./src/database/jogadores.json";

function lerJogadores() {
    if (!fs.existsSync(caminho)) {
        return [];
    }

    const dados = fs.readFileSync(caminho, "utf-8").trim();

    if (!dados) {
        return [];
    }

    try {
        const jogadores = JSON.parse(dados);
        return Array.isArray(jogadores) ? jogadores : [];
    } catch {
        return [];
    }
}

export function login() {
    const jogadores = lerJogadores();

    if (jogadores.length === 0) {
        console.log("❌ Nenhuma carreira encontrada.");
        return false;
    }

    const opcoes = jogadores.map((jogadorSalvo) => (
        `👤 ${jogadorSalvo.nome} | 🆔 ID: ${jogadorSalvo.id} | 📅 ${jogadorSalvo.dias || 0} dias | 💰 R$${jogadorSalvo.dinheiro || 0} | 💼 ${jogadorSalvo.cargo || "Freelancer"}`
    ));

    opcoes.push("↩️ Voltar");

    const escolha = leia.keyInSelect(opcoes, "💾 SUAS CARREIRAS");

    if (escolha === -1 || escolha === jogadores.length) {
        return false;
    }

    Object.assign(jogador, jogadores[escolha]);

    console.clear();
    console.log("================================");
    console.log("       ✅ LOGIN REALIZADO!");
    console.log("================================");
    console.log("\n👤 Jogador: " + jogador.nome);
    console.log("🆔 ID da carreira: " + jogador.id);
    console.log("📅 Dias: " + jogador.dias);
    console.log("💰 Salário: R$" + jogador.salario);
    console.log("💼 Cargo: " + jogador.cargo);

    return true;
}