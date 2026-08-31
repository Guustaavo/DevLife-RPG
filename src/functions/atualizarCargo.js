import leia from 'readline-sync';
import { jogador } from '../containers/player.js';
import { niveis } from '../containers/cargos.js';

export function cargos() {
    console.log("===== Cargos =====")
    console.log("XP atual: " + jogador.xp);
    console.log("Formação atual: " + jogador.formacao);

    let cargos = leia.keyInSelect(["Estagiario", "Junior", "Pleno", "Senior", "TechLead"], "Escolha o cargo: ")

    if (cargos === -1) {
        return;
    }

    if (jogador.xp < niveis[cargos].xpNecessario) {
        console.log("❌ XP insuficiente");
        return;
    }

    if (jogador.formacao < niveis[cargos].formacaoNecessaria) {
        console.log("❌ Curso necessário não concluído");
        return;
    }

    jogador.salario = niveis[cargos].salario;
    jogador.gastoEnergia = niveis[cargos].gastoEnergia;
    jogador.cargo = niveis[cargos].cargo;
    jogador.ganhoXp = niveis[cargos].ganhoXp;
    jogador.energia = niveis[cargos].energia;
    jogador.energiaMaxima = niveis[cargos].energia;

    console.log("✅ Agora você é " + niveis[cargos].cargo + "!");
    console.log("💰 Novo salário: R$" + jogador.salario);
}