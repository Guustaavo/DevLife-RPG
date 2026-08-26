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
        if (jogador.xp >= 300) {
            jogador.salario = Niveis.Estagiario.salario
            jogador.gastoEnergia = Niveis.Estagiario.gastoEnergia
            jogador.cargo = Niveis.Estagiario.cargo
            console.log("agora você é um Estagiário de TI!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < 300){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 1) {
        if (jogador.xp >= 750) {
            jogador.salario = Niveis.Junior.salario
            jogador.gastoEnergia = Niveis.Junior.gastoEnergia
            jogador.cargo = Niveis.Junior.cargo
            console.log("agora você é um Dev Junior!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < 750){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 2) {
        if (jogador.xp >= 1200) {
            jogador.salario = Niveis.Pleno.salario
            jogador.gastoEnergia = Niveis.Pleno.gastoEnergia
            jogador.cargo = Niveis.Pleno.cargo
            console.log("agora você é um Dev Pleno!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < 1200){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 3) {
        if (jogador.xp >= 2000) {
            jogador.salario = Niveis.Senior.salario
            jogador.gastoEnergia = Niveis.Senior.gastoEnergia
            jogador.cargo = Niveis.Senior.cargo
            console.log("agora você é um Dev Senior!!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < 2000){
            console.log("xp insuficiente")
        }
    }

    if (cargos === 4) {
        if (jogador.xp >= 2800) {
            jogador.salario = Niveis.TechLead.salario
            jogador.gastoEnergia = Niveis.TechLead.gastoEnergia
            jogador.cargo = Niveis.TechLead.cargo
            console.log("agora você é um TechLead!!")
            console.log("parabens, agora você esta no maximo da carreira!")
            console.log("novo Salário!!")
        }
        else if (jogador.xp < 300){
            console.log("xp insuficiente")
        }
    }
}