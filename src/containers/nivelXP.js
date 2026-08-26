import leia from "readline-sync"
import { jogador } from "./player.js";

const Niveis = [
    {
        cargo: "Estagiario",
        gastoEnergia: 20,
        salario: 1800,
        xpNecessario: 300
    },
    {
        cargo: "Junior",
        gastoEnergia: 25,
        salario: 2400,
        xpNecessario: 750
    },
    {
        cargo: "Pleno",
        gastoEnergia: 30,
        salario: 5000,
        xpNecessario: 1200
    },
    {
        cargo: "Senior",
        gastoEnergia: 35,
        salario: 10000,
        xpNecessario: 2000
    },
    {
        cargo: "TechLead",
        gastoEnergia: 50,
        salario: 18000,
        xpNecessario: 2800
    }
]

export function cargos() {
    console.log("===== Cargos =====")
    let cargos = leia.keyInSelect(["Estagiario", "Junior", "Pleno", "Senior", "TechLead"], "Escolha o cargo: ")

    if (cargos === 0) {
        if (jogador.xp >= Niveis[0].xpNecessario) {
            jogador.salario = Niveis[0].salario
            jogador.gastoEnergia = Niveis[0].gastoEnergia
            jogador.cargo = Niveis[0].xpNecessario.cargo
            console.log("agora você é um Estagiário de TI!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < Niveis[0].xpNecessario){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 1) {
        if (jogador.xp >= Niveis[1].xpNecessario) {
            jogador.salario = Niveis[1].salario
            jogador.gastoEnergia = Niveis[1].gastoEnergia
            jogador.cargo = Niveis[1].xpNecessario.cargo
            console.log("agora você é Dev Junior!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < Niveis[1].xpNecessario){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 2) {
        if (jogador.xp >= Niveis[2].xpNecessario) {
            jogador.salario = Niveis[2].salario
            jogador.gastoEnergia = Niveis[2].gastoEnergia
            jogador.cargo = Niveis[2].xpNecessario.cargo
            console.log("agora você é um Dev Pleno!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < Niveis[2].xpNecessario){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 3) {
        if (jogador.xp >= Niveis[3].xpNecessario) {
            jogador.salario = Niveis[3].salario
            jogador.gastoEnergia = Niveis[3].gastoEnergia
            jogador.cargo = Niveis[3].xpNecessario.cargo
            console.log("agora você é um Dev Senior!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < Niveis[3].xpNecessario){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 4) {
        if (jogador.xp >= Niveis[4].xpNecessario) {
            jogador.salario = Niveis[4].salario
            jogador.gastoEnergia = Niveis[4].gastoEnergia
            jogador.cargo = Niveis[4].xpNecessario.cargo
            console.log("agora você é um TechLead!!")
            console.log("parabens, agora você esta no maximo da carreira!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < Niveis[4].xpNecessario){
            console.log("xp insuficiente")
        }
    }
}