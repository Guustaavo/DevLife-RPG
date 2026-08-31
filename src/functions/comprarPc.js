import leia from 'readline-sync';
import { jogador } from '../containers/player.js';

export function comprarComputador(item) {
    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro = jogador.dinheiro - item.preco;
        jogador.setup = item.itens;
        console.log("Voce comprou: " + item.nome);
        console.log("Saldo restante: R$" + jogador.dinheiro);
    } else {
        console.log("Saldo insuficiente! Voce tem R$" + jogador.dinheiro + ", precisa de R$" + item.preco);
    }
}