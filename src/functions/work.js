import leia from "readline-sync";
import { jogador } from "./creation.js";

export function trabalhar() {
let trabalhar = keyInSelect(["sim","nao"]);

if (trabalhar === 0 && jogador.energia > 0){
    console.log("Você trabalhou e ganhou: R$" + jogador.salario)
    
}
}