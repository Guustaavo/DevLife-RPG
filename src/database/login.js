import fs from "fs";
import { jogador } from "../containers/player.js";
import { menuSeta } from "../functions/menuSeta.js";

const caminho = "./src/database/jogadores.json";

export async function login() {

    if (!fs.existsSync(caminho)) {
        console.log("❌ Nenhuma carreira encontrada.");
        return false;
    }

    const dados = fs.readFileSync(caminho, "utf-8");

    if (dados.trim() === "") {
        console.log("❌ Nenhuma carreira encontrada.");
        return false;
    }

    const jogadores = JSON.parse(dados);

    if (jogadores.length === 0) {
        console.log("❌ Nenhuma carreira encontrada.");
        return false;
    }

    const opcoes = jogadores.map(
        jogador => `👤 ${jogador.nome} | 🆔 ID: ${jogador.id} | 📅 ${jogador.dias || 0} dias | 💰 R$${jogador.salario || 0} | 💼 ${jogador.cargo}`
    );

    opcoes.push("↩️ Voltar");

    const escolha = await menuSeta(
        "💾 SUAS CARREIRAS",
        opcoes
    );

    if (escolha === -1 || escolha === jogadores.length) {
        return false;
    }

    const jogadorEncontrado = jogadores[escolha];

    Object.assign(jogador, jogadorEncontrado);

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