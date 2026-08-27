import readline from "readline";
import chalk from "chalk";

export async function menuSeta(message, choices, header = "") {
    let selected = 0;

    readline.emitKeypressEvents(process.stdin);
    process.stdin.resume();

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    return new Promise((resolve) => {

        function render() {
            console.clear();

            if (header) {
                console.log(header);
            }

            console.log("\n" + message + "\n");

            choices.forEach((choice, index) => {
                if (index === selected) {
                    console.log(chalk.magenta("❯ " + choice));
                } else {
                    console.log("  " + choice);
                }
            });
        }

        function onKeypress(str, key) {

            if (key.name === "up") {
                selected--;

                if (selected < 0) {
                    selected = choices.length - 1;
                }

                render();
            }

            else if (key.name === "down") {
                selected++;

                if (selected >= choices.length) {
                    selected = 0;
                }

                render();
            }

            else if (key.name === "return") {

                if (process.stdin.isTTY) {
                    process.stdin.setRawMode(false);
                }

                process.stdin.removeListener("keypress", onKeypress);
                process.stdin.pause();

                resolve(selected);
            }

            else if (key.name === "escape") {

                if (process.stdin.isTTY) {
                    process.stdin.setRawMode(false);
                }

                process.stdin.removeListener("keypress", onKeypress);
                process.stdin.pause();

                resolve(-1);
            }
        }

        process.stdin.on("keypress", onKeypress);

        render();
    });
}