import fs from "fs";

export function salvarJogador(jogador) {

    if (!jogador.id) {
        jogador.id = 1;
    }

    if (!jogador.dataCriacao) {
        jogador.dataCriacao = new Date().toISOString();
    }

    jogador.dataAtualizacao = new Date().toISOString();

    fs.writeFileSync(
        "./src/database/jogador.json",
        JSON.stringify(jogador, null, 2)
    );
}
