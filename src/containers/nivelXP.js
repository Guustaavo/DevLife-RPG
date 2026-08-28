import leia from 'readline-sync';
import { jogador } from './player.js';
import { salvarJogador } from './salvarJogador.js';

export const Niveis = [
    {
        cargo: "Estagiario",
        ganhoXp: 30,
        gastoEnergia: 20,
        salario: 200,
        xpNecessario: 300,
        energia: 150,
        formacaoNecessaria: 1
    },
    {
        cargo: "Junior",
        gastoEnergia: 25,
        ganhoXp: 40,
        salario: 300,
        xpNecessario: 750,
        energia: 200,
        formacaoNecessaria: 2
    },
    {
        cargo: "Pleno",
        gastoEnergia: 30,
        ganhoXp: 55,
        salario: 400,
        xpNecessario: 1200,
        energia: 250,
        formacaoNecessaria: 3
    },
    {
        cargo: "Senior",
        gastoEnergia: 35,
        ganhoXp: 70,
        salario: 500,
        xpNecessario: 2000,
        energia: 300,
        formacaoNecessaria: 4
    },
    {
        cargo: "TechLead",
        gastoEnergia: 50,
        ganhoXp: 100,
        salario: 600,
        xpNecessario: 2800,
        energia: 350,
        formacaoNecessaria: 5
    }
]

export function cargos() {
    console.log("===== Cargos =====")
    console.log("XP atual: " + jogador.xp);
    console.log("Formação atual: " + jogador.formacao);

    let cargos = leia.keyInSelect(["Estagiario", "Junior", "Pleno", "Senior", "TechLead"], "Escolha o cargo: ")

    if (cargos === -1) {
        return;
    }

    if (jogador.xp < Niveis[cargos].xpNecessario) {
        console.log("❌ XP insuficiente");
        return;
    }

    if (jogador.formacao < Niveis[cargos].formacaoNecessaria) {
        console.log("❌ Curso necessário não concluído");
        return;
    }

    jogador.salario = Niveis[cargos].salario;
    jogador.gastoEnergia = Niveis[cargos].gastoEnergia;
    jogador.cargo = Niveis[cargos].cargo;
    jogador.ganhoXp = Niveis[cargos].ganhoXp;
    jogador.energia = Niveis[cargos].energia;
    jogador.energiaMaxima = Niveis[cargos].energia;

    salvarJogador(jogador);

    console.log("✅ Agora você é " + Niveis[cargos].cargo + "!");
    console.log("💰 Novo salário: R$" + jogador.salario);
}