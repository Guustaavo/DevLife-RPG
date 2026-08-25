
import fs from "fs";

export function salvarJogador(jogador) {
    fs.writeFileSync(
        "./data/jogadores.json",
        JSON.stringify(jogador, null, 2)
    );
}