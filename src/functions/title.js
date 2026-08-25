import leia from "readline-sync";
import { cargos } from "../containers/nivelXP.js";

export function cargos(){
    console.log("\n======= CARGOS =======");
    let cargo = leia.keyInSelect([cargos])
}