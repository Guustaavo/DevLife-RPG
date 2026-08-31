import leia from 'readline-sync';
import { jogador } from '../containers/player.js';

export function comprarCurso(item) {
    if (jogador.cursoEmAndamento > 0) {
        console.log("Voce ja esta fazendo um curso.");
        return;
    }

    if (item.nivel > jogador.formacao + 1) {
        console.log("Voce precisa concluir o curso anterior primeiro.");
        return;
    }

    if (item.nivel <= jogador.formacao) {
        console.log("Voce ja concluiu esse curso.");
        return;
    }

    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro = jogador.dinheiro - item.preco;
        jogador.cursoEmAndamento = item.nivel;
        jogador.diasCurso = item.tempoConclusao;
        console.log("Curso iniciado: " + item.nome);
        console.log("Duracao: " + item.tempoConclusao + " dias");
    } else {
        console.log("Saldo insuficiente! Voce tem R$" + jogador.dinheiro + ", precisa de R$" + item.preco);
    }
}