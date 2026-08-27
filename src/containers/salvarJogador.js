import fs from "fs";

const caminho = "./src/database/jogadores.json";

export function salvarJogador(jogador) {

    let jogadores = [];

    if (fs.existsSync(caminho)) {
        const dados = fs.readFileSync(caminho, "utf-8");

        if (dados.trim() !== "") {
            jogadores = JSON.parse(dados);
        }
    }

    // Se ainda não possui ID, cria um novo
    if (!jogador.id) {

        if (jogadores.length === 0) {
            jogador.id = 1;
        } else {
            const maiorId = Math.max(
                ...jogadores.map(jogador => jogador.id)
            );

            jogador.id = maiorId + 1;
        }

        jogador.dataCriacao = new Date().toISOString();

        jogadores.push(jogador);

    } else {

        // Procura a carreira pelo ID
        const indice = jogadores.findIndex(
            j => j.id === jogador.id
        );

        jogador.dataAtualizacao = new Date().toISOString();

        if (indice !== -1) {
            jogadores[indice] = jogador;
        } else {
            jogadores.push(jogador);
        }
    }

    jogador.dataAtualizacao = new Date().toISOString();

    fs.writeFileSync(
        caminho,
        JSON.stringify(jogadores, null, 2)
    );
}