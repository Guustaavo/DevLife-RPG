import leia from "readline-sync";
import { jogador } from "./player.js";
import { menuSeta } from "../functions/menuSeta.js";
import { salvarJogador } from "./salvarJogador.js";

export const Niveis = [
    {
        cargo: "Estagiario",
        ganhoXp: (30 * jogador.bonusConhecimento),
        gastoEnergia: 20,
        salario: 60,
        xpNecessario: 300,
        energia: 150
    },
    {
        cargo: "Junior",
        gastoEnergia: 25,
        ganhoXp: (40 * jogador.bonusConhecimento),
        salario: 80,
        xpNecessario: 750,
        energia: 200
    },
    {
        cargo: "Pleno",
        gastoEnergia: 30,
        ganhoXp: (55 * jogador.bonusConhecimento),
        salario: 170,
        xpNecessario: 1200,
        energia: 250
    },
    {
        cargo: "Senior",
        gastoEnergia: 35,
        ganhoXp: (70 * jogador.bonusConhecimento),
        salario: 300,
        xpNecessario: 2000,
        energia: 300
    },
    {
        cargo: "TechLead",
        gastoEnergia: 50,
        ganhoXp: (100 * jogador.bonusConhecimento),
        salario: 600,
        xpNecessario: 2800,
        energia: 350
    }
]

export async function cargos() {

    let escolha = await menuSeta(
        "📈 Escolha o cargo que deseja alcançar:",
        [
            "🎓 Estagiario - 300 XP",
            "💻 Junior - 750 XP",
            "🧑‍💻 Pleno - 1200 XP",
            "🔥 Senior - 2000 XP",
            "👑 TechLead - 2800 XP"
        ]
    );

    if (escolha === -1) {
        return;
    }

    if (escolha === 0) {

        if (jogador.xp >= Niveis[0].xpNecessario) {
            jogador.salario = Niveis[0].salario;
            jogador.gastoEnergia = Niveis[0].gastoEnergia;
            jogador.cargo = Niveis[0].cargo;
            jogador.ganhoXp = Niveis[0].ganhoXp;
            jogador.energia = Niveis[0].energia;
            jogador.energiaMaxima = Niveis[0].energia;

            console.log("🎓 Agora você é um Estagiário de TI!!");
            console.log("💰 Novo salário!!");

            salvarJogador(jogador);
        }
        else {
            console.log("❌ XP insuficiente");
        }
    }

    if (escolha === 1) {

        if (jogador.xp >= Niveis[1].xpNecessario) {
            jogador.salario = Niveis[1].salario;
            jogador.gastoEnergia = Niveis[1].gastoEnergia;
            jogador.cargo = Niveis[1].cargo;
            jogador.ganhoXp = Niveis[1].ganhoXp;
            jogador.energia = Niveis[1].energia;
            jogador.energiaMaxima = Niveis[1].energia;

            console.log("💻 Agora você é Dev Junior!!");
            console.log("💰 Novo salário!!");

            salvarJogador(jogador);
        }
        else {
            console.log("❌ XP insuficiente");
        }
    }

    if (escolha === 2) {

        if (jogador.xp >= Niveis[2].xpNecessario) {
            jogador.salario = Niveis[2].salario;
            jogador.gastoEnergia = Niveis[2].gastoEnergia;
            jogador.cargo = Niveis[2].cargo;
            jogador.ganhoXp = Niveis[2].ganhoXp;
            jogador.energia = Niveis[2].energia;
            jogador.energiaMaxima = Niveis[2].energia;

            console.log("🧑‍💻 Agora você é um Dev Pleno!!");
            console.log("💰 Novo salário!!");

            salvarJogador(jogador);
        }
        else {
            console.log("❌ XP insuficiente");
        }
    }

    if (escolha === 3) {

        if (jogador.xp >= Niveis[3].xpNecessario) {
            jogador.salario = Niveis[3].salario;
            jogador.gastoEnergia = Niveis[3].gastoEnergia;
            jogador.cargo = Niveis[3].cargo;
            jogador.ganhoXp = Niveis[3].ganhoXp;
            jogador.energia = Niveis[3].energia;
            jogador.energiaMaxima = Niveis[3].energia;

            console.log("🔥 Agora você é um Dev Senior!!");
            console.log("💰 Novo salário!!");

            salvarJogador(jogador);
        }
        else {
            console.log("❌ XP insuficiente");
        }
    }

    if (escolha === 4) {

        if (jogador.xp >= Niveis[4].xpNecessario) {
            jogador.salario = Niveis[4].salario;
            jogador.gastoEnergia = Niveis[4].gastoEnergia;
            jogador.cargo = Niveis[4].cargo;
            jogador.ganhoXp = Niveis[4].ganhoXp;
            jogador.energia = Niveis[4].energia;
            jogador.energiaMaxima = Niveis[4].energia;

            console.log("👑 Agora você é um TechLead!!");
            console.log("🎉 Parabens, agora você esta no maximo da carreira!");
            console.log("💰 Novo salário!!");

            salvarJogador(jogador);
        }
        else {
            console.log("❌ XP insuficiente");
        }
    }

    leia.keyInSelect(["↩️ Voltar"], "Pressione para voltar.");
}