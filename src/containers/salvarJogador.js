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

    if (!jogador.id) {

        if (jogadores.length === 0) {

            jogador.id = 1;

        } else {

            const maiorId = Math.max(
                ...jogadores.map(jogador => jogador.id)
            );

            jogador.id = maiorId + 1;

        }

        jogador.dataCriacao = new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        });

        jogador.dataAtualizacao = new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        });

        jogadores.push(jogador);

    } else {

        const indice = jogadores.findIndex(
            j => j.id === jogador.id
        );

        jogador.dataAtualizacao = new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        });

        if (indice !== -1) {

            jogadores[indice] = jogador;

        } else {

            jogadores.push(jogador);

        }

    }

    fs.writeFileSync(
        caminho,
        JSON.stringify(jogadores, null, 2)
    );
}