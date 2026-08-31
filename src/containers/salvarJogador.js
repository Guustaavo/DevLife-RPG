import fs from "fs";

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

export function salvarJogador(jogadorAtual) {
    const jogadores = lerJogadores();
    const dataAtual = new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo"
    });

    const jogadorSalvo = { ...jogadorAtual };

    if (!jogadorSalvo.id) {
        const maiorId = jogadores.reduce((maior, atual) => Math.max(maior, Number(atual.id) || 0), 0);
        jogadorSalvo.id = maiorId + 1;
        jogadorSalvo.dataCriacao = dataAtual;
    }

    jogadorSalvo.dataAtualizacao = dataAtual;

    const indice = jogadores.findIndex((j) => Number(j.id) === Number(jogadorSalvo.id));

    if (indice >= 0) {
        jogadores[indice] = jogadorSalvo;
    } else {
        jogadores.push(jogadorSalvo);
    }

    fs.writeFileSync(caminho, JSON.stringify(jogadores, null, 2));
    Object.assign(jogadorAtual, jogadorSalvo);

    return jogadorSalvo;
}