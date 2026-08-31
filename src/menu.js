import leia from 'readline-sync';

import { jogador } from './containers/player.js';
import { salvarJogador } from './containers/salvarJogador.js';
import { status } from './functions/status.js';
import { trabalhar } from './functions/trabalhar.js';
import { descansar } from './functions/descansar.js';
import { mostrarLoja } from './functions/mostrarLoja.js';
import { cargos } from './functions/atualizarCargo.js';
import { cadastro } from './database/cadastro.js';
import { login } from './database/login.js';

function continuar() {
    leia.keyInSelect(['Continuar'], 'Pressione Enter para continuar.');
}

function menuInicial() {
    const opcoes = ['Nova carreira', 'Entrar em uma carreira', 'Sair'];
    return leia.keyInSelect(opcoes, '=== DEV. LIFE RPG ===');
}

function loopJogo() {
    let jogoAtivo = true;

    do {
        console.clear();
        console.log('\n=== Dev. Life Game RPG ===\n');
        console.log('Nome: ' + jogador.nome);
        console.log('Energia: ' + jogador.energia + '/' + jogador.energiaMaxima);
        console.log('Dinheiro: R$ ' + jogador.dinheiro);

        const acao = leia.keyInSelect(
            ['Ver Status', 'Trabalhar', 'Descansar', 'Ver loja', 'Ver cargos', 'Voltar ao menu'],
            'Escolha o que deseja fazer: '
        );

        if (acao === 0) {
            status();
        } else if (acao === 1) {
            trabalhar();
        } else if (acao === 2) {
            descansar();
        } else if (acao === 3) {
            mostrarLoja();
        } else if (acao === 4) {
            cargos();
        } else {
            jogoAtivo = false;
        }

        salvarJogador(jogador);

        if (jogoAtivo) {
            continuar();
        }
    }   while (jogoAtivo)

    console.log('\nVoltando ao menu principal...');
}

function iniciarMenu() {
    while (true) {
        let escolha = menuInicial();

        if (escolha === -1 || escolha === 2) {
            console.log('Até logo!');
            return;
        }

        let entrouNoJogo = false;

        if (escolha === 0) {
            entrouNoJogo = cadastro();
        } else if (escolha === 1) {
            entrouNoJogo = login();
        }

        if (entrouNoJogo) {
            loopJogo();
        }
    }
}

iniciarMenu();