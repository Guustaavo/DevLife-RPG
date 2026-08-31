import leia from "readline-sync";

export async function menuSeta(message, choices, header = "") {
    if (header) {
        console.log(header);
    }

    return leia.keyInSelect(choices, message);
}