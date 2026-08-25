    import fs from "fs";

    export function salvarJogador(jogador) {
        fs.writeFileSync(
            "./src/database/jogador.json",
            JSON.stringify(jogador, null, 2)
        );
    }